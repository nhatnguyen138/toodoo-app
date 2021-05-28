const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    titles: [{
        type: Object
    }]
})

module.exports = mongoose.model('categories', CategorySchema)