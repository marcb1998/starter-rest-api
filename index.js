const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const express = require('express')
const app = express()

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public', options))

// Create or Update an item
app.post('/:col/:key', async (req, res) => {

})

// Delete an item
app.delete('/:col/:key', async (req, res) => {

})

// Get a single item
app.get('/:col/:key', async (req, res) => {

})

// Get a full listing
app.get('/:col', async (req, res) => {
})

//test
app.get('/test', (req, res) => {
  console.log('/test')
  res.json({ msg: 'dit is een test'}).end()
})

//get words from firebase
app.get('/api/words', async (req, res) => {
  const snapshot = await db.collection('words').get();
  snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
  })
  res.json({data: doc.data()})
})

// Catch all handler for all other request.
app.use('*', (req, res) => {
  res.json({ msg: 'no route handler found' }).end()
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening on ${port}`)
})
