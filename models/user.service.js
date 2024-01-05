const pool = require('../database/index')

module.exports = {
  createUser: (data, callBack) => {
    try {
      pool.query(
        `INSERT INTO restaurant_menu.restaurant_registration (fullname, email, password, age, number, date_added) VALUES (?, ?, ?, ?, ?, NOW())`,
        [
          data.fullname,
          data.email,
          data.password,
          data.age,
          data.number,
        ],
        (error, results, fields) => {
          if(error){
            callBack(error)
          }
          return callBack(null, results)
        }
      )
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  getAllUsers: callBack => {
    try {
      pool.query(
        `SELECT * FROM restaurant_menu.restaurant_registration`,
        [],
        (error, results, fields) => {
          if(error){
            console.log(error)
            callBack(error)
          }
          return callBack(null, results)
        }
      )
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },
  getUserByID: (id, callBack) => {
    pool.query(
      `SELECT * FROM restaurant_menu.restaurant_registration WHERE user_id = ? `,
      [id],
      (error, results, fields) => {
        if(error){
          callBack(error)
        }
        return callBack(null, results)
      }
    )
  },
  getUserByEmail: (email, callBack) => {
    pool.query(
      `SELECT * FROM restaurant_menu.restaurant_registration WHERE email = ? `,
      [email],
      (error, results, fields) => {
        if(error){
          callBack(error)
        }
        console.log(results)
        return callBack(null, results)
      }
    )
  },
  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE restaurant_menu.restaurant_registration SET fullname = ?, email = ?, password = ?, age = ?, number = ?, date_updated = NOW() WHERE user_id = ?`,
      [
        data.fullname,
        data.email,
        data.password,
        data.age,
        data.number,
        data.id
      ],
      (error, results, fields) => {
        if(error){
          callBack(error)
        }
        console.log(results)
        return callBack(null, results)
      }
    )
  },
  deleteUser: (id, callBack) => {
    pool.query(
      `DELETE FROM restaurant_menu.restaurant_registration WHERE user_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        console.log(results)
        return callBack(null, results);
      }
    )
  }
  

}