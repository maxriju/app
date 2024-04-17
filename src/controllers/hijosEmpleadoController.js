const HijoModel = require('../models/hijosEmpleadoModel');

/*exports.getAllHijos = async (req, res, next) => {
    try {
        const { status, name, page, pageSize } = req.query;
        const hijos = await HijoModel.getAllHijos({ status, name, page, pageSize });
        res.json(hijos);
    } catch (error) {
        next(error);
    }
};*/

exports.getAllHijos = async (req, res, next) =>{
    try{

        const empleadoId = req.params.empleadoId;
        const hijos = await HijoModel.getAllHijosEmpleado(empleadoId);
        res.json(hijos);
    }catch(error) {
        next(error);
    }
}

exports.createHijo = async (req, res, next) => {
    try {

        const empleadoId = req.params.empleadoId;
        const hijoData= req.body;
        const hijoId = await HijoModel.createHijo(empleadoId, hijoData);
        res.status(201).json({ id: hijoId, message: 'Son created successfully' });

    } catch (error) {
        next(error);
    }
};

exports.updateHijo = async (req, res, next) => {
    try {
        const hijoId = req.params.hijoId;
        const hijoData = req.body;
        const success = await HijoModel.updateHijo(hijoId, hijoData);
        if (success) {
            res.status(200).json({ message: 'Son updated successfully' });
        } else {
            res.status(404).json({ message: 'Son not found or no changes were made' });
        }
    } catch (error) {
        next(error);
    }
};

