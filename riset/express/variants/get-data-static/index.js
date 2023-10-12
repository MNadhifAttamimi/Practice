const express = require('express');
const app = express();

app.use(express.static('static')); // menjalankan folder yg ada di root

app.listen(3000, () => {
  console.log('server jalan di http://localhost:3000');
});
