// The port Number
const PORT = 5555;

const app = require("./app");
require('dotenv').config();

app.listen(PORT, ()=>{
    console.log("Running on Port " + PORT);
})