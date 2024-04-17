const db = require("../config/dbConfig")

exports.getAllFormacionEmpleado = async (empleadoId) => {
    return new Promise((resolve, reject)=>{

        let query = "SELECT * FROM formacion WHERE id_empleado=?";

        db.query(query, [empleadoId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

exports.createFormacion = async (empleado_id, formacionData) => {
    return new Promise((resolve, reject) => {
        
        if (!formacionData) {
            reject("No employee training data will be provided.");
            return;
        }

        const {tipo, fecha, lugar, descripcion} = formacionData;

        const sql = 'INSERT INTO formacion (id_empleado, tipo, fecha, lugar, descripcion) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [empleado_id, tipo, fecha, lugar, descripcion], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
        
    });
};

exports.updateFormacion= async (formacionId, formacionData) => {
    return new Promise((resolve, reject) => {
        const { tipo, fecha, lugar, descripcion} = formacionData;

        const sql = 'UPDATE formacion SET tipo=?, fecha=?, lugar=?, descripcion=? WHERE id=?';
        db.query(sql, [tipo, fecha, lugar, descripcion, formacionId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};  