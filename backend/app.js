const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");



// Database connection 
mongoose.connect(
  "mongodb+srv://server_user:hWhH3NVym7IfdI3X@wdd430-notes.6s3jjqm.mongodb.net/web_db?retryWrites=true&w=majority&appName=wdd430-notes"
)
.then(conn => {
  console.log("Success connection");
})
.catch(err => {
  console.error(err);
});

mongoose.connection.on("connected", () => {
  console.log("connected");
});

mongoose.connection.on('error', err => {
  console.error(err);
});

const indexRouter = require("./routes/index.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.static(
    path.join(
      __dirname,
      "..",
      "frontend",
      "dist",
      "wd430-final-project",
      "browser"
    )
  )
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/api", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
