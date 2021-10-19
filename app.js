var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var bookRouter = require("./routes/book");
var customerRouter = require("./routes/customer");

var app = express();

const helmet = require("helmet");
const cors = require("cors");

app.use(helmet());
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/book", bookRouter);
app.use("/customer", customerRouter);

module.exports = app;
