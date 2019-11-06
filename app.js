var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);

// routes

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/articles");


// connecting to database

mongoose.connect(
  "mongodb://localhost/articles",
  { useNewUrlParser: true, useUnifiedTopology: true  },
  err => {
    console.log("Connected", err ? false : true);
  }
);

// initializing express in app

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// session

app.use(session({
  secret:"secret",
  resave:false,
  saveUninitialized:false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))


// routes

app.use("/", indexRouter);
app.use("/articles", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
