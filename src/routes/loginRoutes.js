const express = require('express');
const loginRouter = express.Router();
const Login = require('../model/logindata');
const signup = require('../model/signupdata');
const bcrypt = require('bcrypt');
// const signup = require('../model/signupdata');
const Signup = require('../model/signupdata');
function router(nav){
    loginRouter.get('/',(req,res)=>{

        res.render("login",
            {
                nav,
                title:"Login",
               
            })
            
        })
loginRouter.post('/signin', (req,res)=>{
            // console.log("hai im added");
                username2 = req.body.username;
             Signup.findOne({username2 :username2})
              .then((user)=>{
                if(!user){
                  
                     res.render("usernamevalid");
                    } 
                    else
                    {
                        password2 = req.body.password;
                    if(password2 != user.password2)
                       {
                           
                                res.render("passvalid");
        
                         }
                       else{
                        console.log("account identified")
                        res.redirect('/');
                        //  res.status(200).send();
                       }
                       
                        
        
                 
                    }
                    
          
         
               


        })
        
    })
loginRouter.post('/signup',(req,res)=>{
            var item = {
                username2:  req.body.username2,
                 password2: req.body.password2,
                 password3: req.body.password3
                  
                } 
                var signup =  Signup(item);
                signup.save();
                res.redirect('/');


        })
    
    return loginRouter
}
module.exports = router;
