var path = require('path')
// var express = require('express')
// const router = express.Router()
const router = require('express').Router()

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads index.html - front page
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// exercise route loads exercise.html
router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

// stats route loads stats.html
router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router
// // Routes
// // =============================================================
// module.exports = function (app) {
//     // Each of the below routes just handles the HTML page that the user gets sent to.

//     // index route loads index.html - front page
//     app.get('/', function (req, res) {
//         res.sendFile(path.join(__dirname, './public/index.html'))
//     })

//     // exercise route loads exercise.html
//     app.get('/exercise', function (req, res) {
//         res.sendFile(path.join(__dirname, './public/exercise.html'))
//     })

//     // stats route loads stats.html
//     app.get('/stats', function (req, res) {
//         res.sendFile(path.join(__dirname, './public/stats.html'))
//     })
// }
