const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const colors = require("colors");
const router = require("./src/routes/profileRoutes");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/v1", router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(colors.bold.brightBlue(`Server is running on: ${port}`));
});
