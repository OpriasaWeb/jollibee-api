const {
  createUser,
  getAllUsers,
  getUserByID,
  getUserByEmail,
  updateUser,
  deleteUser
} = require("../models/user.service")

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    try {
      const body = req.body
      const salt = genSaltSync(10)
      body.password = hashSync(body.password, salt)
      createUser(body, (err, results) => {
        if(err){
          console.log(err)
          return res.status(500).json({
            success: 0,
            message: "Database connection error"
          });
        }
        return res.json({
          success: 1,
          data: results
        })
      })
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  getUsers: (req, res) => {
    try {
      getAllUsers((err, results) => {
        if(err){
          console.log(err)
          return res.json({
            success: 0
          })
        }
        console.log(results)
        return res.json({
          success: 1,
          data: results
        })
      })
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  }
}