const ABEModel = require("../models/altasYBajasModel");

//AB = altas y bajas 
//E= empleado
//abe = altas y bajas de los empleados

exports.getAllABE= async (req, res, next) =>{
    try{

        const empleadoId = req.params.empleadoId;
        const abe = await ABEModel.getAllAB(empleadoId);
        res.json(abe);
    }catch(error) {
        next(error);
    }
}

exports.createAltaE = async (req, res, next) => {
    try {

        const empleadoId = req.params.empleadoId;
        const AltaEData= req.body;
        const ABEId = await ABEModel.createAltaE(empleadoId, AltaEData);
        res.status(201).json({ id: ABEId, message: 'Register created successfully' });

    } catch (error) {
        next(error);
    }
};

exports.updateABE = async (req, res, next) => {
    try {
        const ABEId = req.params.altaBajaId;
        const ABEData = req.body;
        const success = await ABEModel.updateAB(ABEId, ABEData);
        if (success) {
            res.status(200).json({ message: 'Register updated successfully' });
        } else {
            res.status(404).json({ message: 'Register not found or no changes were made' });
        }
    } catch (error) {
        next(error);
    }
};
