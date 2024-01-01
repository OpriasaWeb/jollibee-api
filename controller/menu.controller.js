const pool = require('../database/index')

const menuController = {
  get: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM restaurant_menu.food_menu")
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  getByID: async (req, res) => {
    try {
      const { menu_id } = req.params
      const sql = "SELECT * FROM restaurant_menu.food_menu WHERE menu_id = ?"
      const [rows, fields] = await pool.query(sql, [menu_id])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  add: async (req, res) => {
    try {
      const { food, price, serving } = req.body
      const sql = `INSERT INTO restaurant_menu.food_menu (food_name, price, serving, date_added) VALUES (?, ?, ?, NOW())`
      const [rows, fields] = await pool.query(sql, [food, price, serving])
      res.json({ 
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  update: async (req, res) => {
    try {
      const { food, price, serving } = req.body
      const { menu_id } = req.params
      const sql = `UPDATE restaurant_menu.food_menu SET food_name = ?, price = ?, serving = ?, date_updated = NOW() WHERE menu_id = ?`
      const [rows, fields] = await pool.query(sql, [food, price, serving, menu_id])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  delete: async (req, res) => {
    try {
      const { menu_id } = req.params
      const sql = `DELETE FROM restaurant_menu.food_menu WHERE menu_id = ?`
      const [rows, fields] = await pool.query(sql, [menu_id])
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  }
}

module.exports = menuController