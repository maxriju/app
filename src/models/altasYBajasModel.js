const db = require('../config/dbConfig');

//AB = altas y bajas de los empleados
//E= empleado

exports.getAllAB = (empleadoId)=>{
    return new Promise((resolve, reject)=>{
        try{
            let query = "SELECT * FROM ingresos_bajas WHERE id_empleado=?";

            db.query(query, [empleadoId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results || []);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}


exports.createAltaE = async (empleado_id, altaData) => {
    return new Promise((resolve, reject) => {
        
        if (!altaData) {
            reject("No data by provided.");
            return;
        }

        const {fecha_ingreso} = altaData;

        const sql = 'INSERT INTO ingresos_bajas (id_empleado, fecha_ingreso) VALUES (?, ?)';
        db.query(sql, [empleado_id, fecha_ingreso], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
        
    });
};

exports.updateAB= async (altaBajaId, bajaData) => {
    return new Promise((resolve, reject) => {
        const {fecha_baja, descripcion, motivo} = bajaData;

        const sql = 'UPDATE ingresos_bajas SET fecha_baja=?, descripcion=?, motivo=? WHERE id=?';
        db.query(sql, [fecha_baja, descripcion, motivo, altaBajaId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};

