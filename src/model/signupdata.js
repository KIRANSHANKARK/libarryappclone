const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@libraryapp.dojdn.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
 const signupSchema = new Schema({
    username2: String,
    password2: String,
    password3: String

 });
 var signup =  mongoose.model('signupdata',signupSchema);
 module.exports = signup;
    
 