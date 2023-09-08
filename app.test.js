const request = require('supertest');
const app = require('./app');

describe('Test in app', () => {
    test('when get root should success', async () => {
        let response = await request(app).get('/');

        expect(response.status).toBe(200); // ===
        // '5' === 5 => false
        expect(response.body).toEqual({ data: [] }); // ==
        // '5' == 5 => true
    }, 5000);

    test('when post data should success', async () => {
        const data = { name: 'nadhif', age: 16 };
        let response = await request(app).post('/').send(data);

        expect(response.status).toBe(200);

        expect(response.body.data[0].name).toBe('nadhif');
        expect(response.body.data[0].age).toBe(16);
        expect(typeof response.body.data[0].id).toBe('number');
    });

    test('when test flow should success', async () => {
        // masukkan semua data
        const data1 = { name: 'nadhif', age: 16 };
        const data2 = { name: 'muhammad', age: 17 };
        const data3 = { name: 'ppqita', age: 20 };

        await request(app).post('/').send(data1);
        await request(app).post('/').send(data2);
        await request(app).post('/').send(data3);

        // ambil id (random)
        let response = await request(app).get('/');

        let id1 = response.body.data[0].id;
        let id2 = response.body.data[1].id;
        let id3 = response.body.data[2].id;

        // ubah data
        const newData = { id: id3, name: 'muhammad' };
        await request(app).put('/').send(newData);

        // hapus data
        await request(app).delete('/').send({ id: id2 });

        // ambil data terbaru
        let response2 = await request(app).get('/');

        // cocokkan
        expect(response2.body).toEqual({
            data: [
                { id: id1, name: 'nadhif', age: 16 },
                { id: id3, name: 'muhammad' },
            ],
        });
    });

    afterAll(() => {
        app.close(); // Menutup server setelah semua tes selesai
    });
});