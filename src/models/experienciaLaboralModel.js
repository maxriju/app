const db = require("../config/dbConfig");

exports.getAllExperienciaE = async(empleadoId)=>{
    return new Promise((resolve, reject)=>{

        let query = "SELECT * FROM experiencia_laboral WHERE id_empleado=?";

        db.query(query, [empleadoId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}


exports.createExperienciaE = async (empleado_id, experienciaData) => {
    return new Promise((resolve, reject) => {
        
        if (!experienciaData) {
            reject("No employee work experience data will be provided.");
            return;
        }

        const {descripcion} = experienciaData;

        const sql = 'INSERT INTO experiencia_laboral (id_empleado, descripcion) VALUES (?, ?)';
        db.query(sql, [empleado_id, descripcion], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
        
    });
};

exports.updateExperienciaE= async (experienciaId, experienciaData) => {
    return new Promise((resolve, reject) => {
        const {descripcion} = experienciaData;

        const sql = 'UPDATE experiencia_laboral SET descripcion=? WHERE id=?';
        db.query(sql, [descripcion, experienciaId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};