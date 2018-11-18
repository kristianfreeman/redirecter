const express = require("express");
const morgan = require("morgan");
const yaml = require("js-yaml");
const fs = require("fs");
const app = express();
app.use(morgan("combined"));

const port = process.env.PORT || 8080;

const routes = yaml.safeLoad(fs.readFileSync("./routes.yaml", "utf8"));

routes.forEach(route =>
  app.get(route.path, (req, res) => res.redirect(301, route.destination))
);

app.listen(port, () => console.log(`Now listening on port ${port}`));
