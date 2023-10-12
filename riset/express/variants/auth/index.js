// contoh api untuk menerima data
const express = require('express');
const { generateRandomToken } = require('./randomToken');

const app = express();

app.use(express.json());

let dataDummy = [
    { id: 1, username: 'root', password: 'root', name: 'Admin', token: '' },
    { id: 2, username: 'root2', password: '1234', name: 'Admin 2', token: '' },
    { id: 3, username: 'root3', password: '1122', name: 'Admin 3', token: '' },
];

app.post('/api/logout', (req, res) => {
    // @todo2 hapus token, jika sebelumnya ada kasih tahu "berhasil logout", jika sebelumnya kosong maka kasih tahu "sudah logout"
});

app.post('/api/cektoken', (req, res) => {
    // @todo1 cek apa token atau tidak, jika ada kirimkan true, jika tidak kirimkan false
});

app.post('/api/login', (req, res) => {
    console.log(req.body);

    let body = req.body;

    // validasi data yg sederhana
    if (!body || !body.username) {
        return res.status(400).send('harus ada username');
    }

    if (!body || !body.password) {
        return res.status(400).send('harus ada password');
    }

    let ditemukan = false;
    // @bagaimana mencocokan data dari yg diinput dengan yg sudah tersimpan
    index = dataDummy.findIndex(
        (data) => data.username === body.username && data.password === body.password
    );

    if (index >= 0) {
        // bikin token yg sederhana
        const token = generateRandomToken(20);
        dataDummy[index].token = token;
        return res.send({ token, message: 'berhasil login' });
    }

    return res.status(401).send('username or password not found');
});

app.listen(3000, () => {
    console.log('server run in http://localhost:3000');
});