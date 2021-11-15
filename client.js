
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function (req, res, next) {
    res.status(200).send('Det virker!!');
});


    // Port
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Serveren lytter på http://localhost:${PORT}`);
});
    