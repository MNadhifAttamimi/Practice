const {
  createData,
  updateData,
  deleteData,
  findByName,
  updateAllData,
  checkId,
} = require('../crud/CrudObjects');

let dataMemory = [];

const savingData = (name, age) => {
  let id = Math.ceil(Math.random() * 1000);
  dataMemory = createData(dataMemory, { id, name, age });
};

const showAllData = () => {
  return dataMemory;
};

const getDataByName = (name) => {
  return findByName(dataMemory, name);
};

const editNamaData = (id, name) => {
  dataMemory = updateData(dataMemory, id, name);

  return dataMemory;
};

const editNamaUmurData = (id, name, age) => {
  dataMemory = updateAllData(dataMemory, id, { name, age });

  return dataMemory;
};

const isIdExist = (id) => {
  return checkId(dataMemory, id);
};

const removeData = (id) => {
  // ubah ke integer dari string
  if (typeof id === 'string') {
    id = parseInt(id);
  }

  dataMemory = deleteData(dataMemory, id);

  return dataMemory;
};

module.exports = {
  savingData,
  showAllData,
  editNamaData,
  removeData,
  getDataByName,
  editNamaUmurData,
  isIdExist,
};``