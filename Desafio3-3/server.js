const express = require('express');
const nunjucks = require('nunjucks');
const courses = require('./data');

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
    const about = {
        avatarUrl : 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        title : 'Rocketseat',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit tempore veniam ...',
        techs : ['Node.js', 'React.js', 'React Native'],
        networkSocials : [
            {
                name : 'Github',   
                link: 'https://github.com/Rocketseat'
            },
            {  
                name: 'Instagram',
                link: 'https://Instagram.com/rocketseat_oficial/'

            },
            {   
                name: 'Facebook',
                link: 'https://pt-br.facebook.com/rocketseat/'

            }
        ]
    };

    return res.render('about' , {about});
});

server.get('/courses', (req,res) => {
    return res.render('courses', {courses});
});

server.get('/courses/:id', (req,res) => {
    const id = req.params.id;

    const course = courses.find( course => course.id === id);

    if(!course){
        return res.status(404).render('not-found');
    }

    return res.render('course', {id});
});

server.use(function(req, res) {
    return res.status(404).render("not-found");
  });



//PORT SERVER
server.listen(5000, () => {
    console.log('Server is runnig');
});