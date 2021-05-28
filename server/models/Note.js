const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    pinned: {
        type: Boolean
    },
    content: {
        type: String
    },
    timeModified: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('notes', NoteSchema)