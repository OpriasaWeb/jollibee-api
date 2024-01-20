const pool = require('../../database/index')

const refBurgerSteak = {
  addBurgerSteak: async (req, res) => {
    try {
      const { burger_steak_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_burger_steak (burger_steak_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [burger_steak_name])
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

module.exports = refBurgerSteak