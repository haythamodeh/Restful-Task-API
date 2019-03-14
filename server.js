// DEPENDICIES
var express = require('express');
var session = require('express-session');
const flash = require('express-flash');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// SETTINGS
// app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json()); 
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// Setting our Server to Listen on Port: 8000
const PORT = 8000
app.listen(PORT, () => console.log("listening on port " + PORT))


require("./backend/routes")(app);