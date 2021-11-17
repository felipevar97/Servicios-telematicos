const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const rootController = require("./controllers/rootController");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(rootController);

module.exports = app;
