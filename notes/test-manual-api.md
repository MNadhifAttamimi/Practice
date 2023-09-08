# Catatan Ringkas (30/08/23)

- install extensionn`Thunder Client`
- buat collection dengan nama `terserah-kalian`
- pada titik tiga collection `backend-ppqita`, buat `new request`, berinama dan urlnya adalah `localhost3000`
- jalankan server dengan `npm run start`
- jgn lupa simpan dengan `ctrl + s`
- jalankan dengan click tombol `send`

## test secara manual dengan terminal
----
- untuk get
`curl -X  GET http://localhost:3000`
- untuk update
`curl -X  PUT http://localhost:3000`
- untuk tambah data
`curl -X  POST -d '{"name":"Attamimi"}' http://localhost:3000`
- untuk delete data
`curl -X  DELETE http://localhost:3000`

## test otomatis menggunakan supertest

- install supertest
`npm i -D supertest`
- import supertest
`const request = require('supertest')`
- import aplikasi express
`const app = require('./app')`
- panggil apl di supertest (contoh impolementasinya)
`expect(response.status).toBe(200);`
- test body 
`expect (response.body).toEqual({message:'hello,world'!})`

```
    const data = {message}

    ## Test otomatis menggunakan supertest
instal = npm i -D supertest
import supertest = const request = require('supertest');
import aplikasi express = const app = require('./app');
panggil path root = const response = await require(app).get('/');
test status = expect(response.status).toBe(200);
test body = expect(response.body).toEqual({message:'Hello World'});

Contoh post
const data = {message: "Test"};
const response = await response(app)
 .post('/api/post')
 .send(data)

afterAll( () => {
    app.close()  <!-- Menutup server setelah semua test selesai -->
} );

NB: 
- Tidak perlu menjalankan server secara manual
- Pada app.js, untuk app.listen harus di export agar tidak error

const server = app.listen()
module.exports = server;