const express = require("express")
const app = express()

require('dotenv').config()

const menuRouter = require("./routes/menu.routes")
const employeeRouter = require("./routes/employee.routes")
const branchRouter = require("./routes/branches.routes")
const refPositionRouter = require('./routes/ref_positions.routes')
const refBeverages = require('./routes/ref_beverages.routes')
const refBreakfastMeals = require('./routes/ref_breakfast_meals.routes')
const refBreakfastSandwiches = require('./routes/ref_breakfast_sandwiches.routes')
const refBurgers = require('./routes/ref_burgers.routes')
const refBurgerSteak = require('./routes/ref_burger_steak.routes')
const refChickenJoy = require('./routes/ref_chickenjoy.routes')
const refDesserts = require('./routes/ref_desserts.routes')
const refNoodlesPasta = require('./routes/ref_noodles_pasta.routes')
const refRiceMeal = require('./routes/ref_ricemeals.routes')
const refSideItem = require('./routes/ref_sideitems.routes')
const refSpecialItem = require('./routes/ref_specialitem.routes')

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use("/restapi/jollibee/menu", menuRouter)
app.use("/restapi/jollibee/employee", employeeRouter)
app.use("/restapi/jollibee/branch", branchRouter)
app.use("/restapi/jollibee/position", refPositionRouter)
app.use("/restapi/jollibee/menu/beverages", refBeverages)
app.use("/restapi/jollibee/menu/breakfastmeal", refBreakfastMeals)
app.use("/restapi/jollibee/menu/breakfastsandwich", refBreakfastSandwiches)
app.use("/restapi/jollibee/menu/burger", refBurgers)
app.use("/restapi/jollibee/menu/burgersteak", refBurgerSteak)
app.use("/restapi/jollibee/menu/chickenjoy", refChickenJoy)
app.use("/restapi/jollibee/menu/dessert", refDesserts)
app.use("/restapi/jollibee/menu/pasta", refNoodlesPasta)
app.use("/restapi/jollibee/menu/ricemeal", refRiceMeal)
app.use("/restapi/jollibee/menu/side", refSideItem)
app.use("/restapi/jollibee/menu/special", refSpecialItem)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`)
})