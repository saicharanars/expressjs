const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const loginRoutes = require("./routes/login");
const messageRoutes = require("./routes/message");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use("/admin", adminRoutes);

app.use( shopRoutes);
app.use(loginRoutes);

app.use(messageRoutes);
console.log((path.join(__dirname,'public')));
app.use((req, res, next) => {
  //res.status(404).send("<h1>page not found</h1>");
  res.status(404).sendFile(path.join(rootDir,"../","views","404.html"));
});

app.listen(4000);