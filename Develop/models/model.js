const mongoose = require('mongoose')

const Schema = mongoose.Schema

const modelSchema = new Schema({
    type: {
        type: String,
        // tirm: true,
    },
    name: {
        type: String,
        tirm: true,
        required: 'Enter name of exercise',
    },
    duration: {
        type: Number,
        required: 'Enter an amount of time for exercise',
    },
    weight: {
        type: Number,
        required: 'Enter an amount for weight',
    },
    reps: {
        type: Number,
        required: 'Enter the number of reps',
    },
    sets: {
        type: Number,
        required: 'Enter the number of sets',
    },
    distance: {
        type: Number,
        required: 'Enter the distance desired',
    },

    date: {
        type: Date,
        default: Date.now,
    },
})

const Workout = mongoose.model('Workout', modelSchema)

module.exports = Workout
