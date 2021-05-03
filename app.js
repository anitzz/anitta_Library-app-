const express = require ("express");

const app=new express();//express constructor

const port= process.env.PORT || 2000;

//globally declaring nav bar
const nav=[
    {
        link:'/books',name:'BOOKS'
    },
    {
        link:'/authors', name:'AUTHORS'
    },
    {
        link:'/login', name:'LOGIN'
    },
    {
        link:'/signup', name:'SIGN UP'
    },
]

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter= require('./src/routes/authorRoutes')(nav);
const loginRouter= require('./src/routes/loginRoute')(nav);
const signupRouter= require('./src/routes/signupRoutes')(nav);
const addbooksRouter= require('./src/routes/addbooksRoute')(nav);
const addauthorsRouter= require('./src/routes/addauthorsRoute')(nav);

app.use(express.static('./public'));// to embedd CSs,js files
app.set('view engine', 'ejs');//set the template engine to ejs view engine is an inbuilt fn
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbooks',addbooksRouter);
app.use('/addauthors',addauthorsRouter);

app.get('/',function(req,res){// / gives root file
   res.render("index",
   {
       nav,
       title:'LIBRARY'
   });//to pass data into ejs file
});


app.listen(port,()=>{console.log("Server Ready at"+ port)});//any port no
