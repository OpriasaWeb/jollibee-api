const pool = require('../database/index')

const employeeController = {
  getEmployee: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("SELECT fullname, rp.position_name, age, number, email, branch_id, years_of_service FROM employee e LEFT JOIN ref_position rp ON e.position_id = rp.position_id")
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
  getEmployeeByID: async (req, res) => {
    try {
      const { employee_id } = req.params
      const sql = "SELECT fullname, rp.position_name, age, number, email, branch_id, years_of_service FROM employee e LEFT JOIN ref_position rp ON e.position_id = rp.position_id WHERE employee_id = ?"
      const [rows, fields] = await pool.query(sql, [employee_id])
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
  addEmployee: async (req, res) => {
    try {
      const { fullname, position, age, number, email, branchid, years } = req.body
      const sql = `INSERT INTO restaurant_menu.employee (fullname, position_id, age, number, email, branch_id, years_of_service, date_started) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`
      const [rows, fields] = await pool.query(sql, [fullname, position, age, number, email, branchid, years])
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
  updateEmployee: async (req, res) => {
    try {
      const { employee_id } = req.params
      const { fullname, position, age, number, email, branchid, years } = req.body
      const sql = `UPDATE restaurant_menu.employee SET fullname = ?, position = ?, age = ?, number = ?, email = ?, branch_id = ?, years_of_service = ?, date_updated = NOW() WHERE employee_id = ?`
      const [rows, fields] = await pool.query(sql, [fullname, position, age, number, email, branchid, years, employee_id])
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
  deleteEmployee: async (req, res) => {
    try {
      const { employee_id } = req.params
      const sql = `DELETE FROM restaurant_menu.employee WHERE employee_id = ?`
      const [rows, fields] = await pool.query(sql, [employee_id])
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
  // getAllManager: async (req, res) => {

  // },
  // getAllDecadeOfService: async (req, res) => {

  // }
}

module.exports = employeeController