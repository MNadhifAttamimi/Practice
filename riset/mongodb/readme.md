
# MongoDB

## Pengertian
MongoDB adalah salah satu sistem basis data NoSQL yang paling populer yang digunakan untuk menyimpan dan mengelola data dalam format dokumen. MongoDB adalah database berorientasi dokumen yang dirancang untuk mengatasi kebutuhan aplikasi modern yang memerlukan fleksibilitas dan skalabilitas dalam penyimpanan data.

## Apa kegunaannya
1. Basis Data Dokumen: MongoDB menyimpan data dalam bentuk dokumen, yang biasanya dalam format BSON (Binary JSON). Setiap dokumen adalah unit data yang mandiri, dan dokumen-dokumen ini dikelompokkan ke dalam koleksi yang setara dengan tabel dalam basis data relasional.

2. Skema Fleksibel: MongoDB mengizinkan skema yang fleksibel, yang berarti setiap dokumen dalam koleksi dapat memiliki struktur yang berbeda. Ini memudahkan pengembang untuk beradaptasi dengan perubahan persyaratan aplikasi tanpa perlu mengubah skema basis data.

3. Kemampuan Skalabilitas Horizontal: MongoDB dirancang untuk skalabilitas horizontal, yang berarti Anda dapat dengan mudah menambahkan lebih banyak server untuk menangani volume data yang lebih besar. Ini sangat berguna dalam aplikasi yang membutuhkan pertumbuhan yang cepat atau dalam lingkungan berbasis cloud.

4. Query dan Indeks: MongoDB mendukung query yang kuat dan dapat membuat indeks untuk mengoptimalkan kueri. Ini memungkinkan pencarian data yang efisien bahkan dalam dataset besar.

5. Dukungan untuk Replika Set: MongoDB memungkinkan Anda untuk mengatur replika set, yang adalah kelompok server MongoDB yang menggandakan data untuk redundansi dan ketersediaan tinggi. Replika set juga berguna untuk pemulihan bencana dan failover otomatis.

6. Transaksi: MongoDB mendukung transaksi untuk mengelola operasi yang melibatkan beberapa dokumen dalam transaksi tunggal. Ini memungkinkan Anda untuk menjalankan operasi seperti transfer dana dengan integritas data yang dijaga.

7. Dukungan untuk Geospasial: MongoDB memiliki dukungan bawaan untuk data geospasial, yang memungkinkan Anda untuk menyimpan dan mengelola data berdasarkan lokasi geografis.

8. Kode Sumber Terbuka: MongoDB tersedia sebagai perangkat lunak sumber terbuka (open-source), yang berarti Anda dapat menggunakannya secara gratis dan mengakses kode sumbernya.

## Cara menggunaannya
beberapa langkah berikut
### instal package mongodb
- jalankan `npm i mongodb` atau `npm install mongodb`

### mambuat datababase mongodb di mongodb.com
- daftar dan buat db di `mongodb.com` (pilih yg gratis)
- dapatkan url `mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net`
- uji coba url di **MongoDB Compass** (install aplikasi)
- jika error masalah TSL, silakan atur networking access dan tambahkan IP Anda

### codingan
- menambahkan package
  `const { MongoClient } = require('mongodb');`

- membuat koneksi
  ```js
  const uri =
    'mongodb+srv://ppqita:santri@ppqitadb.76fharf.mongodb.net/';

  const client = new MongoClient(uri);

  await client.connect();

  ```
- menyiapkan db dan collection

```js
  const dbName = 'testing';
  const collectionName = 'users';
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
```
- menambahkan data

```js
const users = [
    {
      id: 1,
      name: 'ariska',
      age: 20,
    },
  ];

  try {
    const insertManyResult = await collection.insertMany(users);

    console.log(
      `${insertManyResult.insertedCount} documents successfully inserted.\n`
    );
  } catch (err) {
    console.error(
      `Something went wrong trying to insert the new documents: ${err}\n`
    );
  }
```

- menutup akses

```js
 await client.close();
```
- buat jalaninnya

`node riset/mongodb/index.js`
jika berhasil muncul info
`1 documents successfully inserted.`

Contoh Query
- contoh and
  ```js
  const query = {
  $and: [
    { age: { $gt: 20 } }, // Dokumen harus memiliki umur lebih dari 20
    { city: "New York" } // Dan dokumen harus memiliki kota New York
  ]
};
  ```

- contoh or
```js
const query = {
  $or: [
    { age: { $gt: 30 } }, // Dokumen dengan umur lebih dari 30
    { city: "Los Angeles" } // Atau dokumen dengan kota Los Angeles
  ]
};
```
-contoh not
```js
const query = {
  age: { $not: { $gt: 25 } } // Dokumen dengan umur yang tidak lebih dari 25
};
```

- contoh pencarian
```js
const query = {
  $text: { $search: "MongoDB" } // Mencari dokumen dengan teks "MongoDB"
};
```

Jenis Database yg sering/umum digunakan di industri
- production -> data real/data customer
- development/stagging -> data testing secara manual, secara structure mirip production
- testing -> data testing secara otomatis, setelah proses biasanya dihapus

## Ref
- https://www.w3schools.com/mongodb/mongodb_query_operators.php
- https://www.w3schools.com/mongodb/mongodb_update_operators.php

