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
  },
  addBranch: async (req, res) => {
    try {
      const { branch_name, branch_address, branch_telephone, branch_number, branch_employees } = req.body
      const sql = `INSERT INTO restaurant_menu.jollibee_branch (branch_name, branch_address, branch_telephone, branch_number, branch_date_established, branch_employees) VALUES (?, ?, ?, ?, NOW(), ?)`
      const [rows, fields] = await pool.query(sql, [branch_name, branch_address, branch_telephone, branch_number, branch_employees])
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
  editBranch: async (req, res) => {
    try { 
      const { branch_name, branch_address, branch_telephone, branch_number, branch_employees } = req.body
      const { branch_id } = req.params
      const sql = `UPDATE restaurant_menu.jollibee_branch SET branch_name = ?, branch_address = ?, branch_telephone = ?, branch_number = ?, branch_employees = ? WHERE branch_id = ? `
      const [rows, fields] = await pool.query(sql, [branch_name, branch_address, branch_telephone, branch_number, branch_employees, branch_id])
      res.json({
        data: rows
      })
      // console.log(rows['affectedRows'])
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  deleteBranch: async (req, res) => {
    try {
      const { branch_id } = req.params
      const sql = `DELETE FROM restaurant_menu.jollibee_branch WHERE branch_id = ? `
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