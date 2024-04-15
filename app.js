const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middleware/errorMiddleware');
const express = require('express');
const app = express();
app.use(express.json());

/*app.get('/api/saludo', (req, res) => {
    res.send('Hola, mundo!');
  });*/

app.use('/users', userRoutes);

app.use(errorHandler);


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});