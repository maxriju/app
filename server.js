const userRoutes = require('./src/routes/userRoutes');
const empleadoRoute = require('./src/routes/empleadosRoutes');
const hijosEmpladoRuote = require('./src/routes/hiijosEmpleadoRoutes');
const formacionRoute = require('./src/routes/formacionRoutes');
const experienciaRoute = require('./src/routes/experienciaLaboralRoutes');
const altaBajaEmpleadoRoute = require('./src/routes/altasYBajasRoutes');

const errorHandler = require('./src/middleware/errorMiddleware');

const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/saludo', (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });

app.use('/users', userRoutes);
app.use('/empleados', empleadoRoute);
app.use('/hijos-empleado', hijosEmpladoRuote);
app.use('/formacion-empleados', formacionRoute);
app.use('/experienca-empleado', experienciaRoute),
app.use('/altas-bajas-empleado', altaBajaEmpleadoRoute);

app.use(errorHandler);


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});