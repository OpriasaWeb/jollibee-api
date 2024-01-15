const express = require("express")
const app = express()

require('dotenv').config()

// const userRouter = require("./routes/user.routes")
const menuRouter = require("./routes/menu.routes")
const employeeRouter = require("./routes/employee.routes")
const branchRouter = require("./routes/branches.routes")
const refPositionRouter = require('./routes/ref_positions.routes')

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

// app.use("/restapi/jollibee/user", userRouter)
app.use("/restapi/jollibee/menu", menuRouter)
app.use("/restapi/jollibee/employee", employeeRouter)
app.use("/restapi/jollibee/branch", branchRouter)
app.use("/restapi/jollibee/position", refPositionRouter)



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})