const FormacionModel = require("../models/formacionModel");

exports.getAllFormacionE = async (req, res, next) =>{
    try{

        const empleadoId = req.params.empleadoId;
        const formaciones = await FormacionModel.getAllFormacionEmpleado(empleadoId);
        res.json(formaciones);
    }catch(error) {
        next(error);
    }
}


exports.createFormacionE = async (req, res, next) => {
    try {

        const empleadoId = req.params.empleadoId;
        const formacionData= req.body;
        const formacionId = await FormacionModel.createFormacion(empleadoId, formacionData);
        res.status(201).json({ id: formacionId, message: 'Training created successfully' });

    } catch (error) {
        next(error);
    }
};

exports.updateFormacionE = async (req, res, next) => {
    try {
        const formacionId = req.params.formacionId;
        const formacionData = req.body;
        const success = await FormacionModel.updateFormacion(formacionId, formacionData);
        if (success) {
            res.status(200).json({ message: 'Training updated successfully' });
        } else {
            res.status(404).json({ message: 'Training not found or no changes were made' });
        }
    } catch (error) {
        next(error);
    }
};