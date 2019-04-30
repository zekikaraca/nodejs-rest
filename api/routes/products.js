const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Database statements
const INSERT_STMT = `INSERT INTO products (item, price) VALUES(?, ?)`;
const SELECT_ALL_STMT = `SELECT rowid AS id, * FROM products`;
const UPDATE_STMT = `UPDATE products SET item=?, price=? WHERE rowid=?`;


// returns all products
router.get('/', (req, res, next) => {
    // use db.get to return a single row
    // use db.all to return all rows
    db.all(SELECT_ALL_STMT, function(err, rows){
        if (err) {
            res.status(500).json({ "message": "Error fetching products"});
        }
        res.json({ rows });
    });
});

// returns a single procuct based on the provided productId
router.get('/:productId', (req, res, next) => {
    ////////////// FIX //////////////
});

// inserts a product
router.post('/', (req, res, next) => {
    ////////////// FIX //////////////
});

// updates a product
router.patch('/:productId', (req, res, next) => {
    ////////////// FIX //////////////
});

// deletes a product
router.delete('/:productId', (req, res, next) => {
    ////////////// FIX //////////////
});


////////////// FIX //////////////
// Export router