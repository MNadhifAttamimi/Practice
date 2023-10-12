// todo 4: diganti dari mongodb gateway
// const { removeData, isIdExist } = require('../gateways/memory-storage-gateway');

const { isIdExisted, removeData } = require('../gateaways/mongodb-gateway');

const deleteDataUserHandler = async (req, res) => {
    if (!req.body || !req.body.id) {
        res.status(400);
        return res.send({ error: true, message: 'harap memasukkan id' });
    }

    const id = req.body.id;

    if (id <= 0 || id >= 1000) {
        res.status(400);
        return res.send({ error: true, message: 'id harus antara 0 dan 1000' });
    }

    if (!isIdExisted(id)) {
        res.status(400);
        return res.send({ error: true, message: 'id tidak ditemukan' });
    }

    await removeData(id);

    res.send({ error: false, message: 'berhasil' });
};

module.exports = { deleteDataUserHandler };