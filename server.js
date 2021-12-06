const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./views/public"));

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/events", (req, res) => {
  res.render("events");
});

app.use("/test", (req, res) => {
  res.render("test");
});

app.use("/", (req, res) => {
  res.render("error");
});

app.listen(3000);
