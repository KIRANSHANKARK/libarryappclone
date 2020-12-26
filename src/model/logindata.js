const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@libraryapp.dojdn.mongodb.net/Library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const loginSchema = new Schema({

    username: String,
    password: String


});
var Login = mongoose.model('logindata',loginSchema);
module.exports = Login;