const db = require('../config/dbConfig');


exports.getAllAltasBajas = async(empleadoId)=>{
    return new Promise((resolve, reject)=>{

        let query = "SELECT * FROM ingresos_bajas WHERE id_empleado=?";

        db.query(query, [empleadoId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}


exports.createAltaE = async (empleado_id, altaData) => {
    return new Promise((resolve, reject) => {
        
        if (!altaData) {
            reject("No data by provided.");
            return;
        }

        const {fecha_ingreso} = experienciaData;

        const sql = 'INSERT INTO experiencia_laboral (id_empleado, fecha_ingreso) VALUES (?, ?)';
        db.query(sql, [empleado_id, fecha_ingreso], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
        
    });
};

exports.updateAltaABaja= async (altaBajaId, bajaData) => {
    return new Promise((resolve, reject) => {
        const {fecha_baja, descripcion, motivo} = experienciaData;

        const sql = 'UPDATE experiencia_laboral SET descripcion=? WHERE id=?';
        db.query(sql, [fecha_baja, descripcion, motivo, experienciaId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};