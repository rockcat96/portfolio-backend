// Import Dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

//Create our app object 
const app = express();

//Set up middleware
app.use(cors());

//Home route 
app.get("/", (req,res) => {
    res.send("Welcome Home");
});

//Route for retrieving projects
app.get("/projects", (req,res) => {
    res.json(projects);
});

//Route for retrieving about info
app.get("/about", (req,res) => {
    res.json(about);
});

//Declare a variable to store our port number 
const PORT = process.env.PORT || 3000;

//Server listener
app.listen(PORT, () => {
    console.log(`Port is dancing on port ${PORT}`)
})