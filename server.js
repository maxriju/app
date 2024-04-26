const userRoutes = require('./src/routes/userRoutes');
const empleadoRoute = require('./src/routes/empleadosRoutes');
const hijosEmpladoRuote = require('./src/routes/hiijosEmpleadoRoutes');
const formacionRoute = require('./src/routes/formacionRoutes');
const experienciaRoute = require('./src/routes/experienciaLaboralRoutes');
const altaBajaEmpleadoRoute = require('./src/routes/altasYBajasRoutes');

const errorHandler = require('./src/middleware/errorMiddleware');

const express = require('express');
//const cors = require('cors');

const app = express();
//app.use(cors());
app.use(express.json());

/*
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
*/

app.get('/api/saludo', (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });


app.use('/api/users', userRoutes);
app.use('/api/empleados', empleadoRoute);
app.use('/api/hijos-empleado', hijosEmpladoRuote);
app.use('/api/formacion-empleados', formacionRoute);
app.use('/api/experienca-empleado', experienciaRoute);
app.use('/api/altas-bajas-empleado', altaBajaEmpleadoRoute);

app.use(errorHandler);


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});