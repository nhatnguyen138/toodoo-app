const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

// @route GET api/notes
// @desc Get all notes
// @access Public
router.get('/', async (req,res) => {
    try {
        const notes = await Note.find()
        res.json({
            success: true,
            notes
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


// @route GET api/notes/pinned
// @desc Get all pinned notes
// @access Public
router.get('/pinned', async (req,res) => {
    try {
        const notes = await Note.find({ pinned: true })
        res.json({
            success: true,
            notes
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


// @route POST api/notes
// @desc Create a new note
// @access Public
router.post('/', async (req,res) => {
    const {title,category,pinned,content} = req.body
    if (!title)
        return res.status(400).json({
            success: false,
            message: 'Title is required'
        })
    if (!category)
    return res.status(400).json({
        success: false,
        message: 'Category is required'
    })
    try {
        const newNote = new Note({
            title: title,
            category: category,
            pinned: pinned || false,
            content: content
        })
        await newNote.save()
        return res.status(200).json({
            success: true,
            message: 'Note created',
            newNote
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


// @route PUT api/notes
// @desc Update a note
// @access Public
router.put('/:id', async (req,res) => {
    const {title,category,pinned,content} = req.body
    if (!title)
        return res.status(400).json({
            success: false,
            message: 'Title is required'
        })
    if (!category)
    return res.status(400).json({
        success: false,
        message: 'Category is required'
    })
    try {
        let updatedNote = {
            title: title,
            category: category,
            pinned: pinned,
            content: content || ''
        }
        const noteUpdateCondition = { _id: req.params.id }
        updatedNote = await Note.findOneAndUpdate(
            noteUpdateCondition,
            updatedNote,
            {new: true}
        )
        if (!updatedNote)
			return res.status(401).json({
				success: false,
				message: 'Note not found'
			})

        return res.status(200).json({
            success: true,
            message: 'Note updated',
            note: updatedNote
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


// @route DELETE api/notes
// @desc Delete a note
// @access Public
router.delete('/:id', async (req,res) => {
    try {
        const noteDeleteCondition = { _id: req.params.id }
        const deletedNote = await Note.findOneAndDelete(noteDeleteCondition)
        if (!deletedNote)
            return res.status(401).json({
                success: false,
                message: 'Note not found'
            })

        return res.status(200).json({
            success: true,
            message: 'Note deleted'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


// @route DELETE api/notes
// @desc Delete all notes having the same category
// @access Public
router.delete('/', async (req,res) => {
    const {category} = req.body
    try {
        const noteDeleteCondition = { category: category }
        const deletedNote = await Note.deleteMany(noteDeleteCondition)
        if (!deletedNote)
            return res.status(401).json({
                success: false,
                message: 'Note(s) not found'
            })

        return res.status(200).json({
            success: true,
            message: 'Note(s) deleted'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})



module.exports = router