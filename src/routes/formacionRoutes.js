const express = require('express');
const router = express.Router();
const formacionController = require('../controllers/formacionController');


router.get("/:empleadoId", formacionController.getAllFormacionE);
router.post("/:empleadoId", formacionController.createFormacionE);
router.put("/:formacionId", formacionController.updateFormacionE);

module.exports = router;