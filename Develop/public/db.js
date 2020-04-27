let db

const request = indexedDB.open('workoutTracker', 1)

;(request.onupgradeneeded = (event) => {
    const db = event.target.result
    db.createObjectWorkout('workout', { autoIncrement: true })
}),
    (request.onsuccess = function (event) {
        db = event.target.result

        // check if app is online before reading from db
        if (navigator.onLine) {
            checkDatabase() //needs new name and alter the function
        }
    })
request.onerror = function (event) {
    console.log('Woops! ' + event.target.errorCode)
}

function saveRecord(record) {
    // create a transaction on the pending db with readwrite access
    const transaction = db.transaction(['pending'], 'readwrite')

    // access your pending object store
    const store = transaction.objectStore('pending')

    // add record to your store with add method.
    store.add(record)
}
