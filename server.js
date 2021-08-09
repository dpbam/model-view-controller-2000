const path = require('path');
const express = require('express');
const routes = require('/routes');
const exphbs = require('express-handlebars');
const session = require('express-session');
require('dotenv').config
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static('views'));

app.use(routes);


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  });