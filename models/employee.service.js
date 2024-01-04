const pool = require("../database/index")

module.exports = {
  addEmployee: (data, callBack) => {
    pool.query(
      `INSERT INTO restaurant_menu.employee (fullname, position, age, number, email, branch_id, years_of_service, date_started) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        data.fullname,
        data.position,
        data.age,
        data.number,
        data.email,
        data.branch_id,
        data.years_of_service,
      ],
      (error, results, fields) => {
        if(error){
          callBack(error)
        }
        return callBack(null, results)
      }
    )
  },
}