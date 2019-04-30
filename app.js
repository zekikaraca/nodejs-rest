const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');

app.use(morgan('dev'));

app.use(express.json());

// Chained middleware to log some stuff (just for playing around)
app.use(function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// routes
// FIX: ADD ROUTE MIDDLEWARE

// none of above routes handled request
app.use((req, res, next) => {
    const error = new Error();
});


// start the server in the port 3000 !
// we are not using the default express app because under the hood it uses http to create the server
// and we might want to serve https too!
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000.');
// });

module.exports = app;