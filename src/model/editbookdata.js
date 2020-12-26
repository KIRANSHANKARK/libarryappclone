const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@libraryapp.dojdn.mongodb.net/Library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const editbookSchema = new Schema({
    name: String,
    genre: String,
    author: String,
    image: String
});


var editbookdata = mongoose.model('editbookdata',editbookSchema);
module.exports = editbookdata;