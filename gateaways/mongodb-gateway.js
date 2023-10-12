// Todo 3:  duplikasi dari memory gateway kemudian ubah dari memory menjadi mongodb
// clue 1: hapus seluruh function dari CrudObject dan variable datamemory
// clue 2: sesuaikan parameter dengan fungtion mongodb yg telah dibuat

const { MongoClient } = require('mongodb');

const { insertOne } = require('../riset/mongodb/oprations/ExampleInsert');
const {
    findMany,
    isIdExist,
} = require('../riset/mongodb/oprations/ExampleFind');
const { updateById } = require('../riset/mongodb/oprations/ExampleUpdate');
const { deleteById } = require('../riset/mongodb/oprations/ExampleDelete');

// pengganti memoryData
let collection;

// dipanggil di app.js
const connectionDB = async () => {
    const uri = 'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

    const client = new MongoClient(uri);

    await client.connect();

    const dbName = 'development';
    const collectionName = 'users';

    const database = client.db(dbName);
    collection = database.collection(collectionName);
};

// menambahkan async, trycatch dan await
const savingData = async (name, age) => {
    try {
        let id = Math.ceil(Math.random() * 1000);
        await insertOne(collection, { id, name, age });
    } catch (error) {
        console.log('error pada saving data: ', error);
    }
};

const showAllData = async () => {
    let data = [];
    try {
        data = await findMany(collection);
    } catch (error) {
        console.log('error pada show all data: ', error);
    } finally {
        return data;
    }
};

const getDataByName = (name) => {
    // return findByName(dataMemory, name);
};

const editNamaData = (id, name) => {
    // dataMemory = updateData(dataMemory, id, name);

    return dataMemory;
};

const editNamaUmurData = async (id, name, age) => {
    // dataMemory = updateAllData(dataMemory, id, { name, age });
    await updateById(collection, id, { name, age });
    const data = findMany(collection);

    return data;
};

const isIdExisted = async (id) => {
    return await isIdExist(collection, id);
};

const removeData = async (id) => {
    // ubah ke integer dari string
    if (typeof id === 'string') {
        id = parseInt(id);
    }

    // dataMemory = deleteData(dataMemory, id);
    await deleteById(collection, id);
    const data = findMany(collection);

    return data;
};

module.exports = {
    savingData,
    showAllData,
    editNamaData,
    removeData,
    getDataByName,
    editNamaUmurData,
    isIdExisted,
    connectionDB,
};