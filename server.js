const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const colors = require("colors");
const { readdirSync } = require("fs");

app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

readdirSync("./src/routes").map((routeFile) =>
  app.use("/api/v1", require(`./src/routes/${routeFile}`))
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(colors.bold.brightBlue(`Server is running on: ${port}`));
});
