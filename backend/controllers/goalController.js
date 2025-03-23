//  controller functions

const asyncHandler = require('express-async-handler')   // use package called express-async-handler (download in terminal using "npm i express-async-handler") so we can just use our error handler instead of try/catch in our async/await functions

// @desc    Get goals, gets all goals rn, gets a specific users goal when we add auth
// @route   GET //api/goals
// @access  Private, after we add auth
const getGoals = async (req, res) => {
    res.status(200).json({message: 'get goal(s)'})  // responding with get goals message
}

// @desc    Set goal
// @route   POST //api/goals
// @access  Private, after we add auth
const setGoal = async (req, res) => {
    if (!req.body.text) {
        res.status(400) // return 400 error code if no body text
        throw new Error('Please add a text field')

    }

    res.status(200).json({message: 'set goal'})
}

// @desc    Update goal
// @route   PUT //api/goals
// @access  Private, after we add auth
const updateGoal = async (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
}

// @desc    Delete goal
// @route   DELETE //api/goals
// @access  Private, after we add auth
const deleteGoal = async (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
}

// export functions to be used in goalRoutes.js
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}