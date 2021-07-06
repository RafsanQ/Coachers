// Using express.Routes
const routes = require('express').Router();

// Setting Up Landing Page Route
routes.get('/', (req, res) => {
    res.sendfile("index.html", {root: "./Templates/"});
})

// Login Page
routes.get('/login', (req, res) => {
    res.sendfile("sign-in.html", {root: "./Templates/pages/"});
})

// Register Page
routes.get('/signup', (req, res) => {
    res.sendfile("sign-up.html", {root: "./Templates/pages/"});
})



module.exports = routes;