const express = require('express');
const nunjucks = require('nunjucks');

const routes = require('./routes');


const app = express();
app.use(express.static('public'));
app.use(routes);

app.set('view engine', 'njk');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


const PORT = 5000;

app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
);