const express = require("express")
const app = express()

require("dotenv").config()

const menuRouter = require("./routes/menu.routes")
const employeeRouter = require("./routes/employee.routes")

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/restapi/restaurant/menu", menuRouter)
app.use("/restapi/restaurant/employee", employeeRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})