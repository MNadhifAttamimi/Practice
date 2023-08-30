const createData = (bank, data) => {

    bank.push(data)

    return bank;
};

const findById = (bank, id) => {
     return bank.find((value) => value.id === id)
}


const readbyIdx = (bank, idx) => {
    return bank[idx];
};

const updateData = (bank, id, value) => {
    //mencari index n[0,1,2....]
    const index = bank.findIndex((value) => value.id === id);
    // mengubah data berdasarkan id 
    id[index] = value
    return bank;
};

const deleteData = (data, id) => {
    const index = data.findIndex((value) => value.id === id)
    data.splice(index, 2)
    return data
};



module.exports = { createData, readbyIdx, updateData, deleteData, findById   }