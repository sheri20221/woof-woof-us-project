require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');



//Express app
const app = express();


//Connect to mongodb
const dbURI = 'mongodb+srv://notes:pumbit2022@blogy.jwlma.mongodb.net/notes?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));

app.set('view engine', 'ejs');


//Listen for requests
app.listen(3001);

/////////////////////////////////////

const jwt = require('jsonwebtoken');
const { token } = require('morgan');

app.use(express.json())

const posts = [
   {
      username: 'Sharon',
      title: 'Post 1'
   },  {
      username: 'Pumba',
      title: 'Post 2'
   }
]

app.get('/posts', authernticateToken, (req, res)=> {
   res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login' ,(req, res) => {
    //Authenticate User

    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken})
})

function authernticateToken(req, res, next) {
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(' ')[1]
   if (token == null) return res.sendStatus(401)

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
   })
    
}





//Middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



//Routes

app.get('/', (req, res) => {
    res.redirect('/about')
   });
;

app.get('/about', (req, res) => {
   res.render('about', { title: 'About' });

});

app.get('/donate', (req, res) => {
   res.render('donate', { title:'donate'})
  });
;
app.get('/Dogs', (req, res) => {
   res.render('dogs', { title:'Dogs'})
  });
;

app.get('/Cats', (req, res) => {
   res.render('cats', { title:'Cats'})
  });
;


//Blog routes
app.use('/blogs', blogRoutes);


// Dogs pages 
 
 app.get('/Belis', (req, res) => {
    res.render('Belis', { title: 'Belis' });
 });
 app.get('/Olive', (req, res) => {
    res.render('Olive', { title: 'Olive' });
 });
 
 app.get('/Sabastien', (req, res) => {
    res.render('Sabastien', { title: 'Sabastien' });
 });
 
 app.get('/Ricki', (req, res) => {
    res.render('Ricki', { title: 'Ricki' });
 });
 
 app.get('/Luna', (req, res) => {
    res.render('Luna', { title: 'Luna' });
 });
 
 
 app.get('/Diana', (req, res) => {
    res.render('Diana', { title: 'Diana' });
 });
 
 app.get('/Luca', (req, res) => {
    res.render('Luca', { title: 'Luca' });
 });
 
 app.get('/Duke', (req, res) => {
    res.render('Duke', { title: 'Duke' });
 });

 app.get('/Shmariahu', (req, res) => {
   res.render('Shmariahu', { title: 'Shmariahu' });
});

app.get('/Anita', (req, res) => {
   res.render('Anita', { title: 'Anita' });
});

app.get('/Teddy', (req, res) => {
   res.render('Teddy', { title: 'Teddy' });
});

app.get('/Fendi', (req, res) => {
   res.render('Fendi', { title: 'Fendi' });
});

app.get('/Milki', (req, res) => {
   res.render('Milki', { title: 'Milki' });
});

app.get('/stich', (req, res) => {
   res.render('stich', { title: 'Stich' });
});

app.get('/sheffi', (req, res) => {
   res.render('sheffi', { title: 'Sheffi' });
});

app.get('/Mel', (req, res) => {
   res.render('Mel', { title: 'Mel' });
});

app.get('/Eve', (req, res) => {
   res.render('Eve', { title: 'Eve' });
});

app.get('/Lucy', (req, res) => {
   res.render('Lucy', { title: 'Lucy' });
});

app.get('/kutti', (req, res) => {
   res.render('kutti', { title: 'kutti' });
});

app.get('/raj', (req, res) => {
   res.render('Raj', { title: 'Raj' });
});

app.get('/maya', (req, res) => {
   res.render('Maya', { title: 'Maya' });
});

app.get('/kim', (req, res) => {
   res.render('Kim', { title: 'Kim' });
});

app.get('/Luis', (req, res) => {
   res.render('Luis', { title: 'Luis' });
});

app.get('/Nala', (req, res) => {
   res.render('Nala', { title: 'Nala' });
});

app.get('/Leo', (req, res) => {
   res.render('Leo', { title: 'Leo' });
});

app.get('/Dindin', (req, res) => {
   res.render('Dindin', { title: 'Dindin' });
});

app.get('/Kai', (req, res) => {
   res.render('Kai', { title: 'Kai' });
});

app.get('/Lola', (req, res) => {
   res.render('Lola', { title: 'Lola' });
});

app.get('/Lovely', (req, res) => {
   res.render('Lovely', { title: 'Lovely' });
});

app.get('/Puppies', (req, res) => {
   res.render('Puppies', { title: 'Puppies' });
});

app.get('/hilton', (req, res) => {
   res.render('hilton', { title: 'Hilton' });
});

app.get('/Poncho', (req, res) => {
   res.render('Poncho', { title: 'Poncho' });
});

//End of dogs pages

//Cats pages

app.get('/Fuze', (req, res) => {
   res.render('Fuze', { title: 'Fuze' });
});

app.get('/Pocker', (req, res) => {
   res.render('Poker', { title: 'Poker' });
});

app.get('/Grey', (req, res) => {
   res.render('Grey', { title: 'Grey' });
});

app.get('/Richi', (req, res) => {
   res.render('Richi', { title: 'Richi' });
});

app.get('/Carrot', (req, res) => {
   res.render('Carrot', { title: 'Carrot' });
});

app.get('/Joy', (req, res) => {
   res.render('Joy', { title: 'Joy' });
});

app.get('/Ron', (req, res) => {
   res.render('Ron', { title: 'Ron' });
});

app.get('/Telor', (req, res) => {
   res.render('Telor', { title: 'Telor' });
});

// call or donate section 

app.get('/call', (req, res) => {
   res.render('call', {title : 'Call'});
});

 
 //404 page
 app.use((req, res) => {
     res.status(404).render('404', { title: '404' });
 });


 

 
 
