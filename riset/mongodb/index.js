const { MongoClient } = require('mongodb');
const { insertMany } = require('./oprations/ExampleInsert');
const { findMany, isIdExist } = require('./oprations/ExampleFind');
const { deleteById } = require('./oprations/ExampleDelete');

async function run() {
  const uri = 'mongodb+srv://mnadhif:9841185n@cluster0.jp7etyc.mongodb.net/';

  const { collection, client } = await connectionDB(uri, 'testing', 'users');

  await cleanDB(collection);

  // @todo 2: melakukan crud pada data baru
  let myData = [
    {
      id: 1,
      name: 'mufid',
      age: 20,
    },
    {
      id: 2,
      name: 'hidayat',
      age: 25,
    },
    {
      id: 3,
      name: 'samsul',
      age: 23,
    },
  ];

  // 1. menyiapkan data
  const dataRes3 = await insertMany(collection, myData);
  // 2. melakukan pengecekan data ketika data ada
  // await isIdExist(collection, 2);
  // 3. melakukan pencekan ketika data tidak ada
  const isIdExisted = await isIdExist(collection, 3);
  console.log('isIdExisted: ', isIdExisted);

  await client.close();
}

const cleanDB = async (collection) => {
  try {
    // @todo 1: menghapus semua data dengan nilai akhir adalah []
    let dataRes = await findMany(collection);

    for (const data of dataRes) {
      await deleteById(collection, data.id);
    }
  } catch (error) {
    console.error('error clean DB: ', error);
  }
};

/**
 * @challange: bagaimana membuat fungsi untuk memisahkan koneksi db di fungsi terpisah.
 * parameter uri, dbname, collectionname, dan return/mengembalikan value collection
 * 1. buat function async dengan nama connectionDB
 * 2. tambahkan perameter uri, dbName dan collectionName
 * 3. buat trycatch dan handler errornya (bikin log)
 * 4. pindahkan code diatas dengan menyesuaikan nilai parameternya
 * 5. kembalikan/return nilai collectionnya
 * 6. panggil function yg telah dibuat dengan ditangkap oleh variable collection
 */

const connectionDB = async (uri, dbName, collectionName) => {
  try {
    const client = new MongoClient(uri);

    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    return { collection, client };
  } catch (error) {
    console.error('info error di connectionDB: ', error);
  }
};
run().catch(console.dir);
