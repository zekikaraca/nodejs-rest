const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, 'database.db');

const CREATE_TABLE_STMT = `CREATE TABLE IF NOT EXISTS products (item TEXT, price DOUBLE)`;

// create the database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

// create tables
db.serialize(function() {
    db.run(CREATE_TABLE_STMT);
    console.log('Created database tables.');
});

module.exports = db;
