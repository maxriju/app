const dotenv = require('dotenv');
const mysql = require('mysql2');

// determina el archivo .env según el valor de NODE_ENV, para saber en que base de datos hay que ejecutar
const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.qas';
dotenv.config({ path: envFile });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('Conectado a la base de datos');
});

module.exports = db; 