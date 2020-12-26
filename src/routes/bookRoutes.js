const express = require("express");
const booksRouter = express.Router();
const bookdata =require('../model/bookdata');
function router(nav){

// <<<<<<< HEAD
    // var books = [
    //     {
    //         title:"Tom and Jerry",
    //         author:"Joseph barbera",
    //         genre:"cartoon",
    //         img:"download.jpg"
    //     },
    //     {
    //         title:"Harry Potter",
    //         author:"J K Rowlings",
    //         genre:"fantacy",
    //         img:"harry.jpg"
    //     },
    //     {
    //         title:"Interstellar",
    //         author:"Nolan",
    //         genre:"fiction",
    //         img:"Interstellar-366875261-large.jpg"
    //     }
    // ]

//     var books = [
//         {
//             title:"Tom and Jerry",
//             author:"Joseph barbera",
//             genre:"cartoon",
//             img:"download.jpg"
//         },
//         {
//             title:"Harry Potter",
//             author:"J K Rowlings",
//             genre:"fantacy",
//             img:"harry.jpg"
//         },
//         {
//             title:"Interstellar",
//             author:"Nolan",
//             genre:"fiction",
//             img:"Interstellar-366875261-large.jpg"
//         }
//     ]
// >>>>>>> 545af11217944bd3b07d821fb96d845f0a0359c7
    
    
    booksRouter.get("/",function(req,res){
        bookdata.find()
            .then((books)=>{
                res.render("books",
        {
            
            nav,
            title:'Library',
            heading:'Books',
            books
        });
            })
        
        
        });
       
    booksRouter.get("/:i",(req,res)=>{
        const id =  req.params.i;
      bookdata.findOne({_id: id})
      .then((book)=>{


        res.render("book",
        {
            nav,
            title:'book',
            heading:'Books',
            book
        
        }
        )

          
      })

    })
    
    booksRouter.get("/:i/edit",(req,res)=>{
         const id =  req.params.i;
         console.log("my id is "+id);
         bookdata.findOne({_id: id})

         
         .then((book)=>{
          res.render("edit",
          
          {book});
        
                 
          
          
         })
     
       })
 booksRouter.get("/:i/edit/editbook",(req,res)=>{
        const id =  req.params.i;
        console.log("edited")
        var newvalues = {$set :{name : req.query.name,genre : req.query.genre, author:req.query.author,image: req.query.image}};
      bookdata.updateOne({_id: id},newvalues,function(err, res) {
        if (err) throw err;
        console.log("1 document updated");})
      .then((book)=>{


        res.render("books",
        {
            nav,
            title:'book',
            heading:'Books',
            book
        
        }
        );

          
      })
      res.redirect('/')

    
    })

booksRouter.get("/:i/delete",(req,res)=>{
        const id =  req.params.i;
      bookdata.deleteOne({_id: id})
      .then((book)=>{


        res.render("books",
        {
            nav,
            title:'book',
            heading:'Books',
            book
        
        }
        );

          
      })
      res.redirect('/')

    
    })
    return booksRouter; 
  }

module.exports = router;