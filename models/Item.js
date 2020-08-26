const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// This will create a colelction with the name items in the database
module.exports = Item = mongoose.model('item', ItemSchema);
