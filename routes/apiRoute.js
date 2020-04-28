const router = require('express').Router()
const Workout = require('../models/model.js')

router.post('/api/workouts', ({ body }, res) => {
    console.log(body)
    Workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.updateOne({ _id: params.id }, { $push: { exercises: body } })
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

router.post('/api/workouts/bulk', ({ body }, res) => {
    Workout.insertMany(body)
        .then((dbWorkout) => {
            console.log('line 17 called')
            console.log(dbWorkout)
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

// router.get('/api/workouts', (req, res) => {
//     res.json([])
// })

router.get('/api/workouts/', (req, res) => {
    // res.json([])
    Workout.find({})
        .sort({ date: -1 })
        .then((dbWorkout) => {
            console.log('line 29 called')
            console.log(dbWorkout)
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})
router.get('/api/workouts/range', (req, res) => {
    // res.json([])
    Workout.find({})
        .limit(7)
        .then((dbWorkout) => {
            console.log('line 29 called')
            console.log(dbWorkout)
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

module.exports = router
