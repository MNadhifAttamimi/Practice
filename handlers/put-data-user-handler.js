const { editDataName } = require("../gateaways/memory-storage-gateway");

const putDataUserHandler = (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    editDataName(name, id)

    res.send({ error: false, message: "Succes" })
}

module.exports = { putDataUserHandler }