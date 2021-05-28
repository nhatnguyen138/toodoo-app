const express = require('express')
const router = express.Router()
const Category = require('../models/Category')
const Note = require('../models/Note')

// @route GET api/categories
// @desc Get all categories AND their note titles
// @access Public
router.get('/', async (req,res) => {
    try {
        const categories = await Category.find()
        res.json({
            success: true,
            categories
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


// @route POST api/categories
// @desc Create a new category
// @access Public
router.post('/', async (req,res) => {
    const {name} = req.body
    if (!name)
        return res.status(400).json({
            success: false,
            message: 'Name is required'
        })
    try {
        const category = await Category.findOne({ name: name })
        if (category)
            return res.status(400).json({
                success: false,
                message: 'Category already exists'
            })
        
        const titles = await Note.find({ category: name }).select('title')
        const newCategory = new Category({
            name: name,
            titles: titles
        })
        await newCategory.save()
        return res.status(200).json({
            success: true,
            message: 'Category created',
            newCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


// @route PUT api/categories
// @desc Update a category
// @access Public
router.put('/:id', async (req,res) => {
    const {name} = req.body
    if (!name)
        return res.status(400).json({
            success: false,
            message: 'Name is required'
        })
    try {
        const titles = await Note.find({ category: name }).select('title')
        let updatedCategory = {
            name: name,
            titles: titles
        }
        const categoryUpdateCondition = { _id: req.params.id }
        updatedCategory = await Category.findOneAndUpdate(
            categoryUpdateCondition,
            updatedCategory,
            {new: true}
        )
        if (!updatedCategory)
			return res.status(401).json({
				success: false,
				message: 'Category not found'
			})

        return res.status(200).json({
            success: true,
            message: 'Category updated',
            category: updatedCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
})


// @route DELETE api/categories
// @desc Delete a category
// @access Public
router.delete('/:id', async (req,res) => {
    try {
        const categoryDeleteCondition = { _id: req.params.id }
        const deletedCategory = await Category.findOneAndDelete(categoryDeleteCondition)
        if (!deletedCategory)
            return res.status(401).json({
                success: false,
                message: 'Category not found'
            })

        return res.status(200).json({
            success: true,
            message: 'Category deleted'
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