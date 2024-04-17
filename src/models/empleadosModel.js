const db = require('../config/dbConfig');

exports.getAllEmpleados = async (params = {}) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM empleados WHERE 1=1";
        const values = [];

        if (params.status) {
            query += " AND status = ?";
            values.push(params.status);
        }

        if (params.name) {
            query += " AND nombre LIKE ?";
            values.push(`%${params.name}%`);
        }

        db.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};


exports.createEmpleado = async (empleadoData) => {
    return new Promise((resolve, reject) => {
        
        if (!empleadoData) {
            reject("No employee data will be provided.");
            return;
        }

        const {estatus,
            clave,
            nombre_empleado,
            tipo_trabajador,
            estadisticos_auditorias,
            tipo_contrato,
            sexo,
            edad,
            edo_civil,
            tipo_paternidad,
            no_hijos,
            salario_hora,
            sd_inicial_alta,
            sd_actual,
            salario_semanal_bruto,
            puesto,
            nomina,
            departamento,
            jefe_directo,
            fecha_ingreso,
            estatus_recontratable,
            antiguedad,
            nivel_estudios_expediente,
            nivel_estudios_actualizacion,
            especialidad,
            habilidades_laborales,
            fecha_nacimiento,
            estado_nacimiento,
            rfc,
            curp,
            nss,
            calle_numero,
            colonia,
            municipio,
            estado,
            codigo_postal,
            telefono,
            email,
            cuenta_bancaria,
            ruta,
            turno_comida,
            observaciones} = empleadoData;

        const sql = 'INSERT INTO empleados (estatus, clave, nombre_empleado, tipo_trabajador, estadisticos_auditorias, tipo_contrato, sexo, edad, edo_civil, tipo_paternidad, no_hijos, salario_hora, sd_inicial_alta, sd_actual, salario_semanal_bruto, puesto, nomina, departamento, jefe_directo, fecha_ingreso, estatus_recontratable, antiguedad, nivel_estudios_expediente, nivel_estudios_actualizacion, especialidad, habilidades_laborales, fecha_nacimiento, estado_nacimiento, rfc, curp, nss, calle_numero, colonia, municipio, estado, codigo_postal, telefono, email, cuenta_bancaria, ruta, turno_comida, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, [estatus, clave, nombre_empleado, tipo_trabajador, estadisticos_auditorias, tipo_contrato, sexo, edad, edo_civil, tipo_paternidad, no_hijos, salario_hora, sd_inicial_alta, sd_actual, salario_semanal_bruto, puesto, nomina, departamento, jefe_directo, fecha_ingreso, estatus_recontratable, antiguedad, nivel_estudios_expediente, nivel_estudios_actualizacion, especialidad, habilidades_laborales, fecha_nacimiento, estado_nacimiento, rfc, curp, nss, calle_numero, colonia, municipio, estado, codigo_postal, telefono, email, cuenta_bancaria, ruta, turno_comida, observaciones
        ], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
        
    });
};

exports.updateEmpleado = async (empleadoId, empleadoData) => {
    return new Promise((resolve, reject) => {
        const { estatus, clave, nombre_empleado, tipo_trabajador, estadisticos_auditorias, tipo_contrato, sexo, edad, edo_civil, tipo_paternidad, no_hijos, salario_hora, sd_inicial_alta, sd_actual, salario_semanal_bruto, puesto, nomina, departamento, jefe_directo, fecha_ingreso, estatus_recontratable, antiguedad, nivel_estudios_expediente, nivel_estudios_actualizacion, especialidad, habilidades_laborales, fecha_nacimiento, estado_nacimiento, rfc, curp, nss, calle_numero, colonia, municipio, estado, codigo_postal, telefono, email, cuenta_bancaria, ruta, turno_comida, observaciones } = empleadoData;

        const sql = "UPDATE empleados SET estatus=?, clave=?, nombre_empleado=?, tipo_trabajador=?, estadisticos_auditorias=?, tipo_contrato=?, sexo=?, edad=?, edo_civil=?, tipo_paternidad=?, no_hijos=?, salario_hora=?, sd_inicial_alta=?, sd_actual=?, salario_semanal_bruto=?, puesto=?, nomina=?, departamento=?, jefe_directo=?, fecha_ingreso=?, estatus_recontratable=?, antiguedad=?, nivel_estudios_expediente=?, nivel_estudios_actualizacion=?, especialidad=?, habilidades_laborales=?, fecha_nacimiento=?, estado_nacimiento=?, rfc=?, curp=?, nss=?, calle_numero=?, colonia=?, municipio=?, estado=?, codigo_postal=?, telefono=?, email=?, cuenta_bancaria=?, ruta=?, turno_comida=?, observaciones=? WHERE id=?";
        db.query(sql, [estatus, clave, nombre_empleado, tipo_trabajador, estadisticos_auditorias, tipo_contrato, sexo, edad, edo_civil, tipo_paternidad, no_hijos, salario_hora, sd_inicial_alta, sd_actual, salario_semanal_bruto, puesto, nomina, departamento, jefe_directo, fecha_ingreso, estatus_recontratable, antiguedad, nivel_estudios_expediente, nivel_estudios_actualizacion, especialidad, habilidades_laborales, fecha_nacimiento, estado_nacimiento, rfc, curp, nss, calle_numero, colonia, municipio, estado, codigo_postal, telefono, email, cuenta_bancaria, ruta, turno_comida, observaciones, empleadoId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};

/*
exports.deletEmpleado = async (empleadosId) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM empleados WHERE id=?';
        db.query(sql, [empleadosId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};*/