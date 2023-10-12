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

const updateData = (bank, id, value, num) => {
    if (typeof id === 'string') {
        id = parseInt(id);
    }
    const index = bank.findIndex((value, num) => value.id || num.id === id);
    bank[index] = { ...bank[index], ...id, name: value, age: num };
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

const updateAllData = (bank, id, dataBaru) => {
    if(typeof id === "string") {
        id = parseInt(id)
    }
    const index = bank.findIndex((value) => value.id === id)
    bank[index] = {...bank[index],...dataBaru}
    // {data} != {...data}
    // {data} = {data : {a,...}}
    // if {...data} = {a,...}

    return bank;
}

const checkId = (bank, id) => {
    if (typeof id === "string") {
        id = parseInt(id)
    }
    const index = bank.findIndex((data) => data.id === id)

    return index !== -1
}

module.exports = { createData, addObj, findData, updateData, deleteData, findByname, updateAllData, checkId };