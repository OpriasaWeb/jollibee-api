const { hashSync, genSaltSync, compareSync } = require("bcrypt")
const jwt = require("jsonwebtoken")

const pool = require("../database/index")

const userController = {
  createUser: async (req, res) => {
    try {
      const { fullname, email, password, age, number } = req.body;
      const salt = genSaltSync(10);
      const hashedPassword = hashSync(password, salt); // Use a different variable to store the hashed password
      const sql = `INSERT INTO restaurant_menu.restaurant_registration (fullname, email, password, age, number, date_added) VALUES (?, ?, ?, ?, ?, NOW())`
      const [rows, fields] = await pool.query(sql, [fullname, email, hashedPassword, age, number]);
      res.json({ 
        data: rows
      });
    } catch (error) {
      console.log(error);
      res.json({
        state: "error"
      });
    }
  },
  getUsers: async (req, res) => {
    try {
      const sql = `SELECT * FROM restaurant_menu.restaurant_registration `
      const [rows, fields] = await pool.query(sql)
      res.json({ 
        data: rows
      });
    } catch (error) {
      console.log(error);
      res.json({
        state: "error"
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const sql = `SELECT email, password FROM restaurant_menu.restaurant_registration WHERE email = ?`;
      const [rows, fields] = await pool.query(sql, [email]);
      if (rows.length > 0) {
        const user = rows[0];
        const result = compareSync(password, user.password);

        if (result) {
          const jsontoken = jwt.sign({ result: user }, "qwe1234", {
            expiresIn: "1h"
          });
          return res.json({
            success: 1,
            message: "Login successful",
            token: jsontoken
          });
        } else {
          return res.status(401).json({
            success: 2,
            message: "Invalid email or password"
          });
        }
      } else {
        return res.json({
          success: 3,
          message: "Invalid email or password"
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        state: "error"
      });
    }
  }
  
}


module.exports = userController