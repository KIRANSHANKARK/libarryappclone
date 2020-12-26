const express = require("express");
const authorRouter = express.Router();
const authordata = require('../model/Authordata');
function router(nav){

    // var author = [
    //     {
    //         title:"Joseph barbera",
    //         author:"tom & jerry",
    //         genre:"cartoon",
    //         img:"joseph.jpg"
    //     },
    //     {
    //         title:"J K Rowlings",
    //         author:"Harry Potter",
    //         genre:"fantacy",
    //         img:"jk rowlings.jpg"
    //     },
    //     {
    //         title:"Nolan",
    //         author:"Interstellar",
    //         genre:"fiction",
    //         img:"nolan.jpg"
    //     }
    // ]
    
    
    authorRouter.get("/",function(req,res){
        authordata.find()
        .then((author)=>{
            res.render("authors",
            {
                nav,
                title:'authors',
                heading:'Authors',
                author
            });

        })
      
        })
        authorRouter.get('/:i',(req,res)=>{
        const id = req.params.i;
        authordata.findOne({_id: id})
        .then((author)=>{

            res.render("author",
            {
                nav,
                title:"Author",
                heading:'Author',
                author
    
            }
            
            
            )


        })
       });
authorRouter.get('/:i/edit',(req,res)=>{
        const id = req.params.i;
        authordata.findOne({_id: id})
        .then((author)=>{

            res.render("editAuthor",
            {
                nav,
                title:"Author",
                heading:'Author',
                author
    
            }
            
            
            )


        })
       });
 authorRouter.get('/:i/edit/editauthor',(req,res)=>{
        const id = req.params.i;
        var newvalues = {$set :{author2 : req.query.author2,genre2 : req.query.genre2, works:req.query.works,image2: req.query.image2}};
        authordata.updateOne({_id: id},newvalues,function(err, res) {
            if (err) throw err;
            console.log("1 document updated");})
        .then((author)=>{

            res.render("editAuthor",
            {
                nav,
                title:"Author",
                heading:'Author',
                author
    
            }
            
            
            )


        })
        res.redirect('/')
       });
authorRouter.get('/:i/delete',(req,res)=>{
        const id = req.params.i;
        authordata.deleteOne({_id: id})
        .then(()=>{

            res.render("authors"
          
            
            
            )


        })
        res.redirect("/");
       })

       
        return authorRouter
    }
    module.exports = router;