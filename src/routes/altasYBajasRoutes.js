const express = require('express');
const router = express.Router();
const ABEController = require('../controllers/altasYBajasControler');

router.get("/:empleadoId", ABEController.getAllABE);
router.post("/:empleadoId", ABEController.createAltaE);
router.put("/:altaBajaId", ABEController.updateABE);


module.exports = router;