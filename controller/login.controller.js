const pool = require('../database/index')

const loginController = {
  get: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM blog.registration")
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

module.exports = loginController