const pool = require('../database/index')

const refChickenJoy = {
  addChickenJoy: async (req, res) => {
    try {
      const { chickenjoy_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_chickenjoy (chickenjoy_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [chickenjoy_name])
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

module.exports = refChickenJoy