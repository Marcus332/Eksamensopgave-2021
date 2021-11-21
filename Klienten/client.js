const express = require('express');
const app = express();
app.use(express.json());

// Controller
const client = require("./src/user/client");
const PORT = 6000;

//Middleware
app.use(express.static("./stc/view"));
app.use(express.json());

app.get('/', function (req, res, next) {
    res.status(200).send('Det virker!!');
});

// Port
app.listen(PORT, () => {
    console.log(`Serveren lytter på http://localhost:${PORT}`);
});
    