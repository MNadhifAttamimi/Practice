const createData = (bank, data) => {
    bank.push(data);
    return bank;
};

const addObj = (bank, data) => {
    bank.push(data);
    return bank;
};

const findData = (bank, id) => {
    return bank.find((value) => value.id === id);
};

const updateData = (bank, id, value) => {
    const index = bank.findIndex((value) => value.id === id);
    id[index] = value;
    return bank;
};

const deleteData = (bank, id) => {
    const index = bank.findIndex((value) => value.id === id);
    bank.splice(index, 1);
    return bank;
};

const findByname = (bank, name) => {
    return bank.find((value) => value.name.includes(name))
}

module.exports = { createData, addObj, findData, updateData, deleteData, findByname };