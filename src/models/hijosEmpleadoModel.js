const db = require('../config/dbConfig');


/*exports.getAllHijos = async (params = {}) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM hijos_empleados WHERE 1=1";
        const values = [];

        if (params.estatus) {
            query += " AND status = ?";
            values.push(params.estatus);
        }

        if (params.nombre) {
            query += " AND name LIKE ?";
            values.push(`%${params.nombre}%`);
        }

        db.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};*/

exports.getAllHijosEmpleado = async (empleadoId) => {
    return new Promise((resolve, reject)=>{

        let query = "SELECT * FROM hijos_empleados WHERE id_empleado=?";

        

        db.query(query, [empleadoId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};





exports.createHijo = async (empleado_id, userData) => {
    return new Promise((resolve, reject) => {
        
        if (!userData) {
            reject("No user data will be provided.");
            return;
        }

        const {nombre, edad, genero} = userData;

        const sql = 'INSERT INTO hijos_empleados (id_empleado, nombre, edad, genero) VALUES (?, ?, ?, ?)';
        db.query(sql, [empleado_id, nombre, edad, genero], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
        
    });
};

exports.updateHijo = async (hijoId, userData) => {
    return new Promise((resolve, reject) => {
        const { nombre, edad, genero} = userData;

        const sql = 'UPDATE hijos_empleados SET nombre=?, edad=?, genero=? WHERE id=?';
        db.query(sql, [nombre, edad, genero, hijoId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};