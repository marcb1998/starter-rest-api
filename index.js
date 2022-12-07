const express = require('express')
const res = require('express/lib/response')
const app = express()
const tmpWordsJson = require('./words.json')

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

app.get('/words', async (req, res) => {
  const snapshot = await db.collection('words').get();
  const returnArray = new Array;
  snapshot.forEach(doc => {
    key = doc.id;
    value = doc.data().word;
    returnArray.push([key, value])
    console.log(doc.id + '=>' + doc.data());
  })
  res.json({ returnArray }).end()
})

app.get('/addJson', async (req, res) => {
  //load new words from json to array
  const newWords = []
  newWords.push(tmpWordsJson)

  //retrieve current words
  const snapshot = await db.collection('words').get();
  const returnArray = new Array;
  //loop over current word
  snapshot.forEach(doc => {
    value = doc.data().word;
    //add new words to db
    newWords[0].forEach(word => {
      //check of word is in current list
      if(value != word){
        console.log(word + "=>" + value)
        const newDoc = db.collection('words').add({word})
      }//else skip
      else{
        console.log("dupe")
      }
    })
  })
  res.json({msg: "upload compleet"}).end();
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
