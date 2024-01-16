const pool = require('../database/index')

const refBeverages = {
  addBeverage: async (req, res) => {
    try {
      const { beverages_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_beverages (beverages_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [beverages_name])
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

module.exports = refBeverages