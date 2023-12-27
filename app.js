const express = require("express")
const app = express()

require("dotenv").config()

const loginRouter = require("./routes/login.routes")

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/restapi/login", loginRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})