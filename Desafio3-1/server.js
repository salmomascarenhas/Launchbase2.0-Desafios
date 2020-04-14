const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

//Específica onde ficaram os arquivos estátitos.
server.use(express.static('public'));

server.set('view engine','njk');

nunjucks.configure('views', {
    express:server,
    autoescape: true,
    noCache: true
});

server.get('/', (req,res) => {
    res.render('about');
});

server.get('/courses', (req,res) => {
    res.render('courses');
});

server.use(function(req, res) {
    res.status(404).render("not-found");
  });



//PORT SERVER
server.listen(5000, () => {
    console.log('Server is runnig');
});