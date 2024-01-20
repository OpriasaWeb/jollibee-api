const pool = require('../../database/index')

const refBreakfastMeal = {
  addBreakfastMeal: async (req, res) => {
    try {
      const { breakfast_meals_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_breakfast_meals (breakfast_meals_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [breakfast_meals_name])
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

module.exports = refBreakfastMeal