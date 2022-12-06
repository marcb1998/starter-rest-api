const express = require('express')
const res = require('express/lib/response')
const app = express()

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./accountInformationKey.json')

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//test
app.get('/test', (req, res) => {
  console.log('/test')
  res.json({ msg: 'dit is een test'}).end()
})

app.get('/words', (req, async res => {
  const snapshot = await db.collection('words').get();
  res.json({ msg : 'all words'}).end()
}))

// Catch all handler for all other request.
app.use('*', (req, res) => {
  res.json({ msg: 'no route handler found' }).end()
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening on ${port}`)
})
