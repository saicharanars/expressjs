const path = require("path");
const rootDir = require("../util/path");
exports.get404 = (req, res, next) => {
  //res.status(404).send("<h1>page not found</h1>");
  res.status(404).sendFile(path.join(rootDir, "../", "views", "404.html"));
};
