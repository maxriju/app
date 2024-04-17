const express = require('express');
const router = express.Router();
const hijoController = require('../controllers/hijosEmpleadoController');

//router.get('/', hijoController.getAllHijos);
router.get('/:empleadoId', hijoController.getAllHijos);
router.post('/:empleadoId', hijoController.createHijo);
router.put('/:hijoId', hijoController.updateHijo);

module.exports = router;