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
        res.json({ rows });
    });
});

// returns a single procuct based on the provided productId
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    res.status(200).json({
        id: id
    });
});

// inserts a product
router.post('/', (req, res, next) => {

    console.log(req.body);

    const item = req.body.item;
    const price = req.body.price;

    console.log(item);

    // Each command inside the serialize() function is guaranteed to finish executing before the next one starts.
    db.serialize(function() {

        // insert new row into the products table
        db.run(INSERT_STMT, [item, price], function(err) {
            if (err) {
                res.status(500).json({ "message": "Error inserting product"});
            }
        });

        // log all rows
        db.all(SELECT_ALL_STMT, function(err, rows) {
            res.status(200).json({rows});
        });

    });
});

// updates a product
router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;

    // Each command inside the serialize() function is guaranteed to finish executing before the next one starts.
    db.serialize(function() {

        // insert new row into the products table
        db.run(INSERT_STMT, [item, price], function(err) {
            if (err) {
                res.status(500).json({ "message": "Error inserting product"});
            }
        });

        // log all rows
        db.all(SELECT_ALL_STMT, function(err, rows) {
            res.status(200).json({rows});
        });

    });

});

// deletes a product
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!',
        id: id
    });
});


module.exports = router;