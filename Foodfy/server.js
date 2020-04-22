const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');

const server = express();

server.engine('njk',nunjucks.render);
server.set('view engine', 'njk');
server.use(express.static('public'));

nunjucks.configure('views',{
    autoescape: true,
    express: server,
    noCache: true
});



server.get('/',(req,res)=>{
    return res.render('index');
});

server.get('/about',(req,res)=>{
    return res.render('about');
});

server.get('/recipes',(req,res)=>{
    // const id = req.query.id;
    // const modalRecipe = recipes.find( recipe => recipe.id === id);

    return res.render('recipes', {recipes});
});





module.exports = server.listen(5000, ()=> {
    console.log('server is running!');
});