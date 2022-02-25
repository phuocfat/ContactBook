const { BadRequestError, errorHandler } = require("./app/errors");
const express = require("express");
const cors = require("cors");
const app = express();
const setupContactRoutes = require("./app/rotues/contact.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
setupContactRoutes(app);

app.use((req, res, next) => {
  next(new BadRequestError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  errorHandler.handleError(err, res);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});
module.exports = app;
