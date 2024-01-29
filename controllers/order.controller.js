const pool = require('../database/index')

const orderController = {
  orderMenu: async (req, res) => {
    try {
      const { branch_id, employee_id, queue_id, beverage_id, beverage_count, breakfast_meal_id, breakfast_meal_count, breakfast_sandwich_id, 
              breakfast_sandwich_count, burger_id, burger_count, burger_steak_id, burger_steak_count, chickenjoy_id, chickenjoy_count, 
              dessert_id, dessert_count, noodles_pasta_id, noodles_pasta_count, rice_meal_id, rice_meal_count, side_item_id, side_item_count, 
              special_id, special_count, date_ordered, is_void } = req.body
      const sql = `INSERT INTO restaurant_menu.orders (branch_id, employee_id, queue_id, beverage_id, beverage_count, breakfast_meal_id, breakfast_meal_count, 
                  breakfast_sandwich_id, breakfast_sandwich_count, burger_id, burger_count, burger_steak_id, burger_steak_count, chickenjoy_id, chickenjoy_count, 
                  dessert_id, dessert_count, noodles_pasta_id, noodles_pasta_count, rice_meal_id, rice_meal_count, side_item_id, side_item_count, 
                  special_id, special_count, date_ordered, is_void) 
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), false)`
      const [rows, fields] = await pool.query(sql, [branch_id, employee_id, queue_id, beverage_id, beverage_count, breakfast_meal_id, breakfast_meal_count, breakfast_sandwich_id, 
                                                    breakfast_sandwich_count, burger_id, burger_count, burger_steak_id, burger_steak_count, chickenjoy_id, chickenjoy_count, 
                                                    dessert_id, dessert_count, noodles_pasta_id, noodles_pasta_count, rice_meal_id, rice_meal_count, side_item_id, side_item_count, 
                                                    special_id, special_count, date_ordered, is_void])
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
  getOrder: async (req, res) => {
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
  // getAllOrders: async (req, res) => {
  //   try {
  //     const [rows, fields] = await pool.query("SELECT fullname, rp.position_name, age, number, email, branch_id, years_of_service FROM employee e LEFT JOIN ref_position rp ON e.position_id = rp.position_id")
  //     res.json({
  //       data: rows
  //     })
  //   } catch (error) {
  //     console.log(error)
  //     res.json({
  //       state: "error"
  //     })
  //   }
  // },

  
  // updateOrder: async (req, res) => {
  //   try {
  //     const { employee_id } = req.params
  //     const { fullname, position, age, number, email, branchid, years } = req.body
  //     const sql = `UPDATE restaurant_menu.employee SET fullname = ?, position = ?, age = ?, number = ?, email = ?, branch_id = ?, years_of_service = ?, date_updated = NOW() WHERE employee_id = ?`
  //     const [rows, fields] = await pool.query(sql, [fullname, position, age, number, email, branchid, years, employee_id])
  //     res.json({
  //       data: rows
  //     })
  //   } catch (error) {
  //     console.log(error)
  //     res.json({
  //       state: "error"
  //     })
  //   }
  // },
  // voidOrder: async (req, res) => {
  //   try {
  //     const { employee_id } = req.params
  //     const sql = `DELETE FROM restaurant_menu.employee WHERE employee_id = ?`
  //     const [rows, fields] = await pool.query(sql, [employee_id])
  //     res.json({
  //       data: rows
  //     })
  //   } catch (error) {
  //     console.log(error)
  //     res.json({
  //       state: "error"
  //     })
  //   }
  // },
  // getAllManager: async (req, res) => {

  // },
  // getAllDecadeOfService: async (req, res) => {

  // }
}

module.exports = orderController