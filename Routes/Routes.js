// Using express.Routes
const routes = require('express').Router();

// Setting Up Landing Page Route
routes.get('/', (req, res) => {
    res.sendfile("index.html", {root: "./Templates/"});
})

routes.get('/login', (req, res) => {
    res.sendfile("sign-in.html", {root: "./Templates/pages/"});
})
routes.get('/signup', (req, res) => {
    res.sendfile("sign-up.html", {root: "./Templates/pages/"});
})



module.exports = routes;