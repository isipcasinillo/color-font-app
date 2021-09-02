const express = require('express'); // express for server //
const exphb = require('express-handlebars'); // actives handlebars //
const routes = require('./controllers');   // handles routing //
const sequelize = require('./config/connection'); // configuration for sequelize //
const mysql = require('mysql2');
const app = express(); // Express App initiate //
const PORT = process.env.PORT || 3001; // server PORT //
const hbs = exphb.create({});
const path = require('path');
// informs Express on use handlebars template engine //
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json()); // incoming request as JSON OBJECTS //
app.use(express.urlencoded({ extended: true })); // incoming POST/PUT as STRINGS or ARRAYS //
app.use(express.static(path.join(__dirname, 'public'))); // set directory as static //
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
})