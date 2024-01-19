const pool = require('../database/index')

const refSpecialItem = {
  addSpecialItem: async (req, res) => {
    try {
      const { special_item_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_special_item (special_item_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [special_item_name])
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

module.exports = refSpecialItem