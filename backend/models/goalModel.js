// where we define our schema(fields for goals)

const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value'],
        },
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal', goalSchema)