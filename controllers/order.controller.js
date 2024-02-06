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
      const { queue_id } = req.params
      const sql = `SELECT o.queue_id, 
      o.beverage_id, (o.beverage_count * rb.price) AS beverage_total, 
      o.breakfast_meal_id, (o.breakfast_meal_count * rbm.price) AS breakfast_meal_total, 
      o.breakfast_sandwich_id, (o.breakfast_sandwich_count * rbs.price) AS breakfast_sandwich_total, 
      o.burger_id, (o.burger_count * rbrgr.price) AS burger_total, 
      o.burger_steak_id, (o.burger_steak_count * rbstk.price) AS burger_steak_total, 
      o.chickenjoy_id, (o.chickenjoy_count * rc.price) AS chickenjoy_total, 
      o.dessert_id, (o.dessert_count * rd.price) AS dessert_total, 
      o.noodles_pasta_id, (o.noodles_pasta_count * rnp.price) AS noodles_total, 
      o.rice_meal_id, (o.rice_meal_count * rrm.price) AS rice_meal_total, 
      o.side_item_id, (o.side_item_count * rsitms.price) AS side_item_total, 
      o.special_id, (o.special_count * rsi.price) AS special_total, 
      o.order_count 
      FROM orders o 
      LEFT JOIN ref_beverages rb ON o.beverage_id = rb.beverages_id
      LEFT JOIN ref_breakfast_meals rbm ON o.breakfast_meal_id = rbm.breakfast_meals_id 
      LEFT JOIN ref_breakfast_sandwiches rbs ON o.breakfast_sandwich_id = rbs.breakfast_sandwiches_id 
      LEFT JOIN ref_burger rbrgr ON o.burger_id = rbrgr.burger_id
      LEFT JOIN ref_burger_steak rbstk ON o.burger_steak_id = rbstk.burger_steak_id
      LEFT JOIN ref_chickenjoy rc ON o.chickenjoy_id = rc.chickenjoy_id
      LEFT JOIN ref_desserts rd ON o.dessert_id = rd.desserts_id
      LEFT JOIN ref_noodles_and_pasta rnp ON o.noodles_pasta_id = rnp.noodles_pasta_id
      LEFT JOIN ref_rice_meals rrm ON o.rice_meal_id = rrm.rice_meals_id
      LEFT JOIN ref_side_items rsitms ON o.side_item_id = rsitms.side_items_id
      LEFT JOIN ref_special_item rsi ON o.special_id = rsi.special_item_id
      WHERE o.queue_id = ? `
      const [rows, fields] = await pool.query(sql, [queue_id])
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
  voidOrder: async (req, res) => {
    try {
      const { order_id, queue_id } = req.params
      const sql = `UPDATE restaurant_menu.orders SET status = 3, is_void = 1 WHERE order_id = ? AND queue_id = ?`
      const [rows, fields] = await pool.query(sql, [order_id, queue_id])
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
  updateOrder: async (req, res) => {
    try {
      const { order_id, queue_id } = req.params
      const { beverage_id, beverage_count,
              breakfast_meal_id, breakfast_meal_count,
              breakfast_sandwich_id, breakfast_sandwich_count,
              burger_id, burger_count,
              burger_steak_id, burger_steak_count,
              chickenjoy_id, chickenjoy_count,
              dessert_id, dessert_count,
              noodles_pasta_id, noodles_pasta_count,
              rice_meal_id, rice_meal_count,
              side_item_id, side_item_count,
              special_id, special_count
            } = req.body
      const sql = `UPDATE restaurant_menu.orders 
      SET beverage_id = ?, beverage_count = ?, 
      breakfast_meal_id = ?, 	breakfast_meal_count = ?, 
      breakfast_sandwich_id = ?, breakfast_sandwich_count = ?,
      burger_id = ?, burger_count = ?,
      burger_steak_id = ?, 	burger_steak_count = ?,
      chickenjoy_id = ?, chickenjoy_count = ?,
      dessert_id = ?, dessert_count = ?,
      noodles_pasta_id = ?, noodles_pasta_count = ?,
      rice_meal_id = ?, rice_meal_count = ?,
      side_item_id = ?, 	side_item_count = ?,
      special_id = ?, special_count = ?
      date_ordered = NOW() 
      WHERE order_id = AND queue_id = ?`
      const [rows, fields] = await pool.query(sql, [
        beverage_id, beverage_count,
        breakfast_meal_id, breakfast_meal_count,
        breakfast_sandwich_id, breakfast_sandwich_count,
        burger_id, burger_count,
        burger_steak_id, burger_steak_count,
        chickenjoy_id, chickenjoy_count,
        dessert_id, dessert_count,
        noodles_pasta_id, noodles_pasta_count,
        rice_meal_id, rice_meal_count,
        side_item_id, side_item_count,
        special_id, special_count,
        order_id, queue_id])
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
}

module.exports = orderController