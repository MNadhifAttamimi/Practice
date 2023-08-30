const express = require('express');

const app = express();

//example sederhana

app.use(express.json())

/**
    req adalah singkatan dari request yg isinya yg dikirimkan oleh client.
    seperti body, parametery, query
    res adalah singkatan dari responss yg isinya kita kirim kje client.
    contoh seperti data, json, html, dan codeHTTP (default:200)   
    */

app.get('/', (req, res) => {
    res.send('Hello World')
})

// biar bisa running
app.listen(3000, () => {
    console.log('Hai DEEPs!, Servermu udah jalan di http://localhost:3000')
})
//cara jalanin
//jalaninnya dgn menulis node app.js di terminal
// jika ingin mematikannya click ( crtl + c )

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/', (req, res) => {
    let name = req.body.name

    res.send('Assalamualaikum Kak' + name)
})

app.put('/', (req, res) => {
    res.send('update data')
})

app.delete('/', (req, res) => {
    res.send('delete data')
})

