// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const modelSchema = new Schema({
//     type: {
//         type: String,
//         // tirm: true,
//     },
//     name: {
//         type: String,
//         tirm: true,
//         required: 'Enter name of exercise',
//     },
//     duration: {
//         type: Number,
//         required: 'Enter an amount of time for exercise',
//     },
//     weight: {
//         type: Number,
//         required: 'Enter an amount for weight',
//     },
//     reps: {
//         type: Number,
//         required: 'Enter the number of reps',
//     },
//     sets: {
//         type: Number,
//         required: 'Enter the number of sets',
//     },
//     distance: {
//         type: Number,
//         required: 'Enter the distance desired',
//     },

//     date: {
//         type: Date,
//         default: Date.now,
//     },
// })

// const Workout = mongoose.model('Workout', modelSchema)

// module.exports = Workout

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        //    run date.now inside anon function so that the date.now function runs every time an obj is created. not just when db is created.
        default: () => Date.now(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: 'Select a type of exercise.',
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter name for exercise.',
            },
            duration: {
                type: Number,
                required: 'Enter duration for exercise.',
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
        },
    ],
})
const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout
