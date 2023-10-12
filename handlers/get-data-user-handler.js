const { showAllData } = require('../gateaways/mongodb-gateway');

const getDataUserHandler = async (req, res) => {
    try {
        res.send({ data: await showAllData() });
    } catch (error) {
        res.send({ error: true, message: error.message });
    }
};

module.exports = { getDataUserHandler };