const express = require("express");
const router = express.Router();
const userModel = require("./../models/brugere");
const dataBase = require("./../helpers/database")

router.post("/create", (req, res) => {
    const user = new userModel(req.body.email, req.body.password);
    dataBase.saveUser(user);
    res.status(200).send(true);
});

module.exports = router