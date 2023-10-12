const findMany = async (collection) => {
  try {
    const dataRes = await collection.find().toArray();

    return dataRes;
  } catch (err) {
    console.error(`Something went wrong trying to read the documents: ${err}`);
  }
};

const findOne = async (collection) => {
  try {
    const dataRes = await collection.findOne();

    return dataRes;
  } catch (err) {
    console.error(
      `Something went wrong trying to read the documents: ${err}\n`
    );
  }
};

const findOneById = async (collection, id) => {
  try {
    const dataRes = await collection.findOne({ id });
    return dataRes;
  } catch (err) {
    console.error(
      `Something went wrong trying to read the documents: ${err}\n`
    );
  }
};

// inisialisasi
const isIdExist = async (collection, id) => {
  try {
    // proses
    const dataRes = await collection.findOne({ id });
    // dataRes jika ada, maka menhasilkan object = true
    // dataRes jika tidk ada, maka menhasilkan null = false

    // delivery
    return !!dataRes;
  } catch (error) {
    console.error('info error is id exist: ', error);
  }
};

const findWithQuerySpesific = async (
  collection,
  query = { age: { $gt: 24 } }
) => {
  // ingin mencari siswa yg mimiliki umur 24 tahun
  try {
    const dataRes = await collection.find(query).toArray();

    return dataRes;
  } catch (err) {
    console.error(
      `Something went wrong trying to read the documents: ${err}\n`
    );
  }
};

module.exports = {
  findMany,
  findOne,
  findOneById,
  findWithQuerySpesific,
  isIdExist,
};
