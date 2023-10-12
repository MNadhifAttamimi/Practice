const {
    editNamaUmurData,
    isIdExisted,
} = require('../gateaways/mongodb-gateway');
const { nameValidation, ageValidation } = require('../validation');

const putDataUserHandler = async (req, res) => {
    try {
        if (!req.body || !req.body.id) {
            return res.send({ error: true, message: 'harap memasukkan id' });
        }

        const id = req.body.id;
        const name = req.body.name;
        const age = req.body.age;

        if (id <= 0 || id >= 1000) {
            return res.send({ error: true, message: 'id harus antara 0 dan 1000' });
        }

        if (!isIdExisted(id)) {
            res.status(400);
            return res.send({ error: true, message: 'id tidak ditemukan' });
        }

        let realNameRes = nameValidation(name);
        let realAgeRes = ageValidation(age);
        // @todo melakukan validasi umur

        if (realNameRes.error) {
            res.status(400);
            return res.send(realNameRes);
        }
        // @todo lempar error umur
        if (realAgeRes.error) {
            res.status(400);
            return res.send(realAgeRes);
        }

        editNamaUmurData(id, realNameRes.data, realAgeRes.data);

        res.send({ error: false, message: 'success' });
    } catch (error) {
        console.error('handler ubah : ', error);
    }
};

module.exports = { putDataUserHandler };