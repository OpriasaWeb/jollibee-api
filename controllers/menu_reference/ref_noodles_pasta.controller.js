const pool = require('../../database/index')

const refNoodlesPasta = {
  addNoodlesPasta: async (req, res) => {
    try {
      const { noodles_pasta_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_noodles_and_pasta (noodles_pasta_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [noodles_pasta_name])
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

module.exports = refNoodlesPasta