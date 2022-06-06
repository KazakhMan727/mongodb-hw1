const express = require("express");
const phonesRouter = express.Router();
const models = require("./../Models");

phonesRouter.get("/", (req, res) => {
    models.Phone.find({}, (err, results) => {
        if (err) console.log("an error occured");
        res.send(results);
    });
});

phonesRouter.post("/", (req, res) => {
    const {phoneModel, price} = req.body;

    const phone = new models.Phone({phoneModel, price});

    phone.save((err) => {
        if (err) res.status(500).send("error");
        res.send("Posted");
    });
})

module.exports = phonesRouter;