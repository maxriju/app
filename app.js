const express = require('express');
const app = express();


app.get('/api/saludo', (req, res) => {
    res.send('Hola, mundo!');
  });

const PORT = process.env.PORT || 3000;
console.log(process.env.env)


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});