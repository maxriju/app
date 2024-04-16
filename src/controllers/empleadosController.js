const empleadoModel = require('../models/empleadosModel');

exports.getAllEmpleados = async (req, res, next) => {
    try {
        const { status, name, page, pageSize } = req.query;
        const empleados = await empleadoModel.getAllEmpleados({ status, name, page, pageSize });
        res.json(empleados);
    } catch (error) {
        next(error);
    }
};

exports.createEmpleado = async (req, res, next) => {
    try {
        const empleadoData= req.body;
        const empleadoId = await empleadoModel.createEmpleado(empleadoData);
        res.status(201).json({ id: empleadoId, message: 'Employee created successfully' });
    } catch (error) {
        next(error);
    }
};

exports.updateEmpleado = async (req, res, next) => {
    try {
        const empleadoId = req.params.empleadoId;
        const empleadoData = req.body;
        const success = await empleadoModel.updateEmpleado(empleadoId, empleadoData);
        if (success) {
            res.status(200).json({ message: 'Employee updated successfully' });
        } else {
            res.status(404).json({ message: 'Employee not found or no changes were made' });
        }
    } catch (error) {
        next(error);
    }
};

/*
exports.deleteEmpleado = async (req, res, next) => {
    try {
        const empleadoId = req.params.empleadoId;
        const success = await empleadoModel.deleteempleado(empleadoId);
        if (success) {
            res.status(200).json({ message: 'employee deleted successfully' });
        } else {
            res.status(404).json({ message: 'employee not found or no changes were made' });
        }
    } catch (error) {
        next(error);
    }
};
*/