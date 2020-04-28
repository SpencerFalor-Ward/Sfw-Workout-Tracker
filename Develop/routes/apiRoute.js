const router = require('express').Router()
const Model = require('../models/model.js')

router.post('/api/workouts', ({ body }, res) => {
    Model.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

router.post('/api/workouts/bulk', ({ body }, res) => {
    Model.insertMany(body)
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

router.get('/api/workouts', (req, res) => {
    Model.find({})
        .sort({ date: -1 })
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

module.exports = router
