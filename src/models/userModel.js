const db = require('../config/dbConfig');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (params = {}) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM users WHERE 1=1";
        const values = [];

        if (params.status) {
            query += " AND status = ?";
            values.push(params.status);
        }

        if (params.name) {
            query += " AND first_name LIKE ?";
            values.push(`%${params.name}%`);
        }

        if (params.page && params.pageSize) {
            const pageSize = parseInt(params.pageSize, 10) || 10;
            const page = parseInt(params.page, 10) || 1;
            const offset = (page - 1) * pageSize;

            query += " LIMIT ? OFFSET ?";
            values.push(pageSize, offset);
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

