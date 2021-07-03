// Using express.Routes
const routes = require('express').Router();

// Setting Up Landing Page Route
routes.get('/', (req, res) => {
    res.send("Home Page");
})


module.exports = routes;