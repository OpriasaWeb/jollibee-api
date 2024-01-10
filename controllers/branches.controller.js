const pool = require("../database/index")

const branchesController = {
  getBranches: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT * FROM restaurant_menu.jollibee_branch")
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
  getBranchByID: async (req, res) => {
    try {
      const { branch_id } = req.params;
      const sql = `SELECT * FROM restaurant_menu.jollibee_branch WHERE branch_id = ?`
      const [rows, fields] = await pool.query(sql, [branch_id])
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

module.exports = branchesController;