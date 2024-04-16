const db = require('../config/dbConfig');
//const bcrypt = require('bcrypt');

exports.getAllUsers = async (params = {}) => {
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM users WHERE 1=1";
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

        const sql = 'INSERT INTO users (name, last_name, position, user, password, status) VALUES (?, ?, ?, ?, ?, ?)';
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
        const { name, last_name, position, user, password } = userData;

        const sql = 'UPDATE users SET name=?, last_name=?, position=?, user=?,  password=? WHERE user_id=?';
        db.query(sql, [name, last_name,position, user, password, userId], (error, results) => {
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
        const sql = 'DELETE FROM users WHERE user_id=?';
        db.query(sql, [userId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows > 0);
            }
        });
    });
};

