const pool = require('../database/index')

const refSideItem = {
  addSideItem: async (req, res) => {
    try {
      const { side_items_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_side_items (side_items_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [side_items_name])
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

module.exports = refSideItem