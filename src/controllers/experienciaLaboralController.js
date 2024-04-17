const ExperienciaModel = require("../models/experienciaLaboralModel");

exports.getAllFExperienciaE = async (req, res, next) =>{
    try{

        const empleadoId = req.params.empleadoId;
        const experiencias = await ExperienciaModel.getAllExperienciaE(empleadoId);
        res.json(experiencias);
    }catch(error) {
        next(error);
    }
}

exports.createExperieciaE = async (req, res, next) => {
    try {
        const empleadoId = req.params.empleadoId;
        const experienciaData= req.body;
        const experienciaId = await ExperienciaModel.createExperienciaE(empleadoId, experienciaData);
        res.status(201).json({ id: experienciaId, message: 'Work experience created successfully' });

    } catch (error) {
        next(error);
    }
};



exports.updateExperienciaE = async (req, res, next) => {
    try {
        const experienciaId = req.params.experienciaId;
        const experienciaData = req.body;
        const success = await ExperienciaModel.updateExperienciaE(experienciaId, experienciaData);
        if (success) {
            res.status(200).json({ message: 'Work experience updated successfully' });
        } else {
            res.status(404).json({ message: 'Work experience not found or no changes were made' });
        }
    } catch (error) {
        next(error);
    }
};