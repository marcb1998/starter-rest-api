const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const express = require('express')
const app = express()

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
app.get('/words', async (req, res) => {
  const snapshot = await db.collection('words').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  })
  res.json({snapshot}).end()
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
