// Oprettelse af serveren 
const express = require('express');
const app = express();
//app.use(express.json());

// Controller
const userControll = require("./src/Serveren/userController");
const PORT = preocess.env.PORT || 5500;

// Middleware
app.use(express.static("./stc/view"));

// Bliver omdannet som string i JSON 
app.use(express.json());

// Routeren 
app.use("/users", userControll);

// Programmet lytter til Porten
app.listen(PORT, console.log(`Serveren virker!`));