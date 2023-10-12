const express = require("express");

const app = express();

app.use(express.json());

/**
 *
 * contoh data yg dikirimkan
 * header:
 * Content-Type: application/json
 * body:
 {
  "id":"138",
  "name":"ariska"
}
 */
app.post("/api/user", (req, res) => {
    console.log(req.body);
    let data = req.body;

    //   contoh validasi data yang sederhana

    if (!data || !data.name) {
        return req.status(400).send('harus ada nama')
    }

    res.send("hello " + name);
});

app.get("/api/user", (req, res) => {
    res.send("get data");
});

app.listen(3000, () => {
    console.log('server jalan di http://localhost:3000');
});


// hanya bisa jalan di thunder client/postman. tidak bisa jalan di browser
// pastikan path diawal oleh slash "/" dengan contoh /api/user. jangan seperti "api/user". sehingga jika tanpa slash maka muncul error 404
