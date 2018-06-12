const { Client } = require('pg');

// Connexion à la DB
const db = new Client({
    host: 'localhost',
    port: 5432,
    database: 'benevolat-db',
    user: 'postgres',
    password: 'admin'
});

db.connect((err) => {
    if (err) {
        console.log('connection error', err)
    }
    console.log('DB connected !')
});

db.asyncQuery = (query) => new Promise( (resolve, reject) => {
    db.query(query, (err, result) => {
        err ? reject(err) : resolve(result)
    });
});

module.exports = db;
