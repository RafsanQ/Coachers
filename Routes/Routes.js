// Using express.Routes
const routes = require('express').Router();

// Setting Up Landing Page Route
routes.get('/', (req, res) => {
    res.sendfile("index.html", {root: "./Templates/"});
})


module.exports = routes;