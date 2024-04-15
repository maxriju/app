const db = require('../config/dbConfig');
//const bcrypt = require('bcrypt');

exports.getAllUsers = async (params = {}) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM user WHERE 1=1";
        const values = [];

        if (params.status) {
            query += " AND status = ?";
            values.push(params.status);
        }

        if (params.name) {
            query += " AND name LIKE ?";
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


exports.createUser = async (userData) => {
    return new Promise((resolve, reject) => {
        
        if (!userData) {
            reject("No user data will be provided.");
            return;
        }

        const {name, last_name, position, user, password, status} = userData;

        const sql = 'INSERT INTO user (name, last_name, position, user, password, status) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [name, last_name, position, user, password, status], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
        
    });
};

exports.updateUser = async (userId, userData) => {
    return new Promise((resolve, reject) => {
        const { name, last_name, position, user } = userData;

        const sql = 'UPDATE user SET first_name=?, last_name=?, user=? WHERE user_id=?';
        db.query(sql, [name, last_name, user, position, userId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};

exports.deleteUser = async (userId) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM user WHERE user_id=?';
        db.query(sql, [userId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};

