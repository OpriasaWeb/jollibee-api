const pool = require('../database/index')

const refPositionsController = {
  addPositionName: async (req, res) => {
    try {
      const { position_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_position (position_name) VALUES (?)`
      const [rows, fields] = await pool.query(sql, [position_name])
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

  
}

module.exports = refPositionsController