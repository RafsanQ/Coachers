// The port Number
const PORT = 5555;

app = require("./app.js");

app.listen(PORT, ()=>{
    console.log("Running on Port " + PORT);
})