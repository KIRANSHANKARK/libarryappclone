
const express = require("express");
const app = new express();
const port = process.env.PORT || 4000;
const nav = [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/login',name:'login'},
    {link:'/add',name:'add'},
    // {link:'/edit',name:'edit'},
    

];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter =require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const addBookRouter = require('./src/routes/addbookRoutes')(nav)
// const editRouter = require('./src/routes/editRoutes')(nav)
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);
app.use('/add',addBookRouter);
// app.use('/edit',editRouter);

app.get("/",function(req,res){
res.render("index",
    {
       nav,
        title:'Library',
        heading:'Global Digital Library'
    }
);
});
 
app.listen(port,()=>{
    console.log("server ready at  "+port);
});