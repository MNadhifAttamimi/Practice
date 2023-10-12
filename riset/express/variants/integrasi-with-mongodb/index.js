const express = require('express');

const { connectionDB } = require('./mongodbGateway');

const uri = 'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

let myCollection, myClient;

const initDB = async () => {
  try {
    const { collection, client } = await connectionDB(
      uri,
      'risetexpress',
      'users'
    );

    myCollection = collection;
    myClient = client;
    console.log('server db berjalan');
  } catch (error) {
    console.log(error);
  }
};

initDB();

const app = express();

app.use(express.json()); // jika tidak ada maka error 500 Internal Server Error

app.post('/api/user', async (req, res) => {
  try {
    console.log(req.body);

    let { name } = req.body;
    const insertManyResult = await myCollection.insertOne(req.body);

    console.log(` document successfully inserted.\n`, insertManyResult);
    res.send('hello ' + name);
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
});

app.listen(3000, () => {
  console.log('server jalan di http://localhost:3000');
});

// jika belum di restart maka bisa muncul erro 500 Internal Server Error
