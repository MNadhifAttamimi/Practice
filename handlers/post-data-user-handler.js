const { savingData, showAllData } = require('../gateaways/mongodb-gateway');
const { nameValidation, ageValidation } = require('../validation');

const postDataUserHandler = async (req, res) => {
    try {
        // mengecek property name
        if (!req.body.name) {
            res.status(400);
            return res.send({
                error: true,
                message: 'tidak memiliki paramater nama',
            });
        }
        // @todo pengecekan property umur
        if (!req.body.age) {
            res.status(400);
            return res.send({
                error: true,
                message: 'tidak memiliki paramater umur',
            });
        }

        // mengambil data nama
        // let name = req.body.name; // mengambil data name
        let { name, age } = req.body;
        // @todo pemanggilan data umur

        // melakukan validasi nama
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

        await savingData(realNameRes.data, realAgeRes.data); // simpan data di memori (memoryGateway)

        res.send({ data: await showAllData() }); // @todo menambahkan data umur yg sudah divalidasi
    } catch (error) {
        res.send({ error: true, message: error.message });
    }
};

module.exports = { postDataUserHandler };