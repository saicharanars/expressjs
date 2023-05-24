const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const loginRoutes = require("./routes/login");
const messageRoutes = require("./routes/message");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);

app.use("/shop", shopRoutes);
app.use(loginRoutes);

app.use(messageRoutes);
app.use((req, res, next) => {
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(4000);