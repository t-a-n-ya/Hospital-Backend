require("dotenv").config();
const express = require('express')
const sequelize = require("./database/Database_connection");
const APIRoute = require("./Routes/ApiRoute") 
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors");
const port = process.env.PORT || 9000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

sequelize.sync();
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

app.use(cors());
app.use("/api", APIRoute);