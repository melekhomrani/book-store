const express = require("express");
const expressLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routers/index");

const app = express();

mongoose
  .connect(process.env.DATABASE_URL || "mongodb://localhost/BookStore", {
    useNewUrlParser: true,
  })
  .then(() => {
    const port = process.env.port || 3000;
    app.listen(port, () => console.log(`app is running on ${port}`));
    console.log("connected to database...");
  })
  .catch((e) => console.log("couldn't connect to database..."));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayout);
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use("/", indexRouter);
