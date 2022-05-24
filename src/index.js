const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './resources/views'));

/// ROUTER CONFIG
app.get('/', (req, res) => {
   res.render('home');
})

app.get('/tin-tuc', (req, res) => {
   res.render('tintuc');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

