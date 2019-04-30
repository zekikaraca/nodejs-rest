const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');

// Middleware: HTTP request logging
app.use(morgan('dev'));

// Middleware that parses incoming requests with JSON payloads
app.use(express.json());

// Middleware (chained) to log some stuff (just for playing around)
app.use(function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

////////////// FIX //////////////
// Add middleware for /products route
// app.use(...);


////////////// FIX //////////////
// Nice to have: Add custom error-handling middleware


////////////// FIX //////////////
// Export app