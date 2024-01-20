const pool = require('../../database/index')

const refBreakfastSandwiches = {
  addBreakfastSandwiches: async (req, res) => {
    try {
      const { breakfast_sandwiches_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_breakfast_sandwiches (breakfast_sandwiches_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [breakfast_sandwiches_name])
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

module.exports = refBreakfastSandwiches