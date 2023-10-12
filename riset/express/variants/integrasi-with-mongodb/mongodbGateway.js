  const { MongoClient } = require('mongodb');

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

module.exports = { connectionDB };
