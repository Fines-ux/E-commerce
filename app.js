const { request } = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //smooth parse of data
const morgan = require("morgan"); //logging requests
const mongoose = require("mongoose"); // library for mongodb
const cors = require("cors");
const authJwt = require("./helpers/jwt");
require("dotenv/config");

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(authJwt());

//Routes
const categoriesRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const orderRoutes = require("./routes/orders");

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productRoutes);
app.use(`${api}/users`, userRoutes);
app.use(`${api}/orders`, orderRoutes);

//database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    //add my ip from google chrome and default gateway from ipcofig in cmd
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "E-shop",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })

  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("the server is running http://localhost:3000");
});
