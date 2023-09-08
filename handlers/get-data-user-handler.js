const { showAllData } = require('../gateaways/memory-storage-gateway')

const getDataUserHandler = (req, res) => {
    res.send({ data: showAllData() });
}

module.exports = { getDataUserHandler }