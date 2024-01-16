const pool = require('../database/index')

const refDesserts = {
  addDessert: async (req, res) => {
    try {
      const { desserts_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_desserts (desserts_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [desserts_name])
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

module.exports = refDesserts