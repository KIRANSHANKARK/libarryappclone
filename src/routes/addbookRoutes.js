const express = require("express");
const addBookRouter = express.Router();
 const Bookdata = require('../model/bookdata');
 const Authordata = require('../model/Authordata');
function router(){
  
addBookRouter.get('/',(req,res)=>{

res.render("addbook")

})
addBookRouter.get('/addbook',(req,res)=>{
var item = {
name:  req.query.name,
 genre: req.query.genre,
 author: req.query.author,
 image: req.query.image
  
}
  var book = Bookdata(item);
 book.save();



  res.redirect('/');
});
addBookRouter.get('/addauthor',(req,res)=>{
  var item = {
  author2:  req.query.author2,
   genre2: req.query.genre2,
   works: req.query.works,
   image2: req.query.image2
    
  }
    var author = Authordata(item);
   author.save();
   res.redirect('/')
  });

return addBookRouter;


}
module.exports = router;