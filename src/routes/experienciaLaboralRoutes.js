const express = require('express');
const router = express.Router();
const ExperiencaController = require("../controllers/experienciaLaboralController");

router.get("/:empleadoId", ExperiencaController.getAllFExperienciaE);
router.post("/:empleadoId", ExperiencaController.createExperieciaE);
router.put("/:experienciaId", ExperiencaController.updateExperienciaE);

module.exports = router;