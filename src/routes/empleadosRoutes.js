const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

router.get('/', empleadosController.getAllEmpleados);
router.post('/', empleadosController.createEmpleado);
router.put('/:empleadoId', empleadosController.updateEmpleado);

module.exports = router;