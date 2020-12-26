const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@libraryapp.dojdn.mongodb.net/Library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    genre: String,
    author: String,
    image: String
});


var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;
