const pool = require('../../database/index')

const refBurgers = {
  addBurger: async (req, res) => {
    try {
      const { burger_name } = req.body
      const sql = `INSERT INTO restaurant_menu.ref_burger (burger_name) VALUES (?) `
      const [rows, fields] = await pool.query(sql, [burger_name])
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

module.exports = refBurgers