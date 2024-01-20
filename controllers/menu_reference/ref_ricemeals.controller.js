const pool = require('../../database/index')

const refRiceMeal = {
  addRiceMeal: async (req, res) => {
    try {
      const { rice_meals_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_rice_meals (rice_meals_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [rice_meals_name])
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

module.exports = refRiceMeal