const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./api/auth");
const cookieSession = require("cookie-session");

// static middleware, allows us to reference files in public folder
app.use(express.static(path.join(__dirname, "..", "/public")));
//allows us to parse json
app.use(express.json());
//allows us to turn messy http body content into usable json objects
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: ["blueprint"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(volleyball);

app.use("/auth", authRoute);
app.use("/api", require("./api"));
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Error middleware
app.use((req, res, next) => {
  const error = Error("page not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
