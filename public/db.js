// let db

// const request = indexedDB.open('workoutTracker', 1)

// ;(request.onupgradeneeded = (event) => {
//     const db = event.target.result
//     db.createObjectStore('workout', { autoIncrement: true })
// }),
//     (request.onsuccess = function (event) {
//         db = event.target.result

//         // check if app is online before reading from db
//         if (navigator.onLine) {
//             checkDatabase() //needs new name and alter the function
//         }
//     })
// request.onerror = function (event) {
//     console.log('Woops! ' + event.target.errorCode)
// }

// function saveRecord(record) {
//     // create an entry on the pending db with readwrite access
//     const entry = db.entry(['workout'], 'readwrite')

//     // access your pending object store of entry
//     const store = entry.objectStore('workout')

//     // add record to your store with add method.
//     store.add(record)
// }

// function checkDatabase() {
//     // open an entry on your pending db
//     const entry = db.transaction(['workout'], 'readwrite')
//     // access your pending object store
//     const store = entry.objectStore('workout')
//     // get all records from store and set to a variable
//     const getAll = store.getAll()

//     getAll.onsuccess = function () {
//         if (getAll.result.length > 0) {
//             fetch('/api/workouts', {
//                 method: 'POST',
//                 body: JSON.stringify(getAll.result),
//                 headers: {
//                     Accept: 'application/json, text/plain, */*',
//                     'Content-Type': 'application/json',
//                 },
//             })
//                 .then((response) => response.json())
//                 .then(() => {
//                     // if successful, open a transaction on your pending db
//                     const entry = db.entry(['workout'], 'readwrite')

//                     // access your pending object store
//                     const store = entry.objectStore('workout')

//                     // clear all items in your store
//                     store.clear()
//                 })
//         }
//     }
// }

// // listen for app coming back online
// window.addEventListener('online', checkDatabase)
