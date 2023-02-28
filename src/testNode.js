import configViewEngine from "./configs/viewEngine"
import  express  from "express"
import initWebRoute from "./route/web"
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8008
configViewEngine(app)

initWebRoute(app)

app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
