const userRoutes = require('./src/routes/userRoutes');
const empleadoRoute = require('./src/routes/empleadosRoutes');
const hijosEmpladoRuote = require('./src/routes/hiijosEmpleadoRoute');
const formacionRoute = require('./src/routes/formacionRoutes');

const errorHandler = require('./src/middleware/errorMiddleware');

const express = require('express');
const app = express();
app.use(express.json());

/*app.get('/api/saludo', (req, res) => {
    res.send('Hola, mundo!');
  });*/

app.use('/api/users', userRoutes);
app.use('/api/empleados', empleadoRoute);
app.use('/api/hijos-empleado', hijosEmpladoRuote);
app.use('/api/formacion-empleados', formacionRoute);

app.use(errorHandler);


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});