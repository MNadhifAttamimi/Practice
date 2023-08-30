const createData = (bank, data) => {

    bank.push(data)

    return bank;
};


const readbyIdx = (bank, idx) => {
    return bank[idx];
};

const updateData = (bank, idx, data) => {
    bank[idx] = data;
    return bank;
};

const deleteData = (bank = [], idx) => {
    bank.splice(idx, 1)
    return bank
};

module.exports = { createData, readbyIdx, updateData, deleteData }