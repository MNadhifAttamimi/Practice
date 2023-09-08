const express = require('express');
const { postDataUserHandler } = require('./handlers/post-data-user-handler');
const { getDataUserHandler } = require('./handlers/get-data-user-handler');
const { putDataUserHandler } = require('./handlers/put-data-user-handler');
const { delDataUserHandler } = require('./handlers/del-data-user-handler');
const app = express();

// Example
/*
    - req = singkatan dari request. Yang isinya yang dikirimkan oleh client. Contoh seperti body, parameter, query
    - res = singkatan dari response. Yang isinya kita kirim ke client. Contoh seperti data, json, html, dan codeHTTP (default:200)
*/

app.use(express.json());

app.get('/', getDataUserHandler);

app.post('/', postDataUserHandler);

app.put('/', putDataUserHandler);

app.delete('/', delDataUserHandler);

// Untuk running
const server = app.listen(3000, () => {
    console.log("Halo cuyy, Server sudah jalan di https://localhost:3000")
});

module.exports = server;

// Untuk menjalankan ketik node app.js di terminal. Untuk cancel tekan Ctr + c.