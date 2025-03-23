//  controller functions

const asyncHandler = require('express-async-handler')   // use package called express-async-handler (download in terminal using "npm i express-async-handler") so we can just use our error handler instead of try/catch in our async/await functions

const Goal = require('../models/goalModel')

// @desc    Get goals, gets all goals rn, gets a specific users goal when we add auth
// @route   GET //api/goals
// @access  Private, after we add auth
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()    // get goals from our database through our mongoose model in goalModel.js

    res.status(200).json(goals)  // responding with get goals message
})

// @desc    Set goal
// @route   POST //api/goals
// @access  Private, after we add auth
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400) // return 400 error code if no body text
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc    Update goal
// @route   PUT //api/goals
// @access  Private, after we add auth
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, 
        {
            new: true, // new: true creates it if it doesn't exist

        })

    res.status(200).json(updatedGoal)
})

// @desc    Delete goal
// @route   DELETE //api/goals
// @access  Private, after we add auth
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.deleteOne()

    res.status(200).json({ id: req.params.id })  // need id for frontend
})

// export functions to be used in goalRoutes.js
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}