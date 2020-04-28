const API = {
    async getLastWorkout() {
        let res
        try {
            res = await fetch('/api/workouts')
        } catch (err) {
            console.log(err)
        }
        const json = await res.json()

        return json[json.length - 1]
    },
    async addExercise(data) {
        const id = location.search.split('=')[1]

        const res = await fetch('/api/workouts/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        const json = await res.json()

        return json
    },
    async createWorkout(data = {}) {
        const res = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })

        const json = await res.json()

        return json
    },

    async getWorkoutsInRange() {
        const res = await fetch(`/api/workouts/range`)
        const json = await res.json()

        return json
    },
}

router.post('/api/transaction', ({ body }, res) => {
    Model.create(body)
        .then((dbTransaction) => {
            res.json(dbTransaction)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

router.post('/api/transaction/bulk', ({ body }, res) => {
    Model.insertMany(body)
        .then((dbTransaction) => {
            res.json(dbTransaction)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

router.get('/api/transaction', (req, res) => {
    Model.find({})
        .sort({ date: -1 })
        .then((dbTransaction) => {
            res.json(dbTransaction)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

module.exports = router
