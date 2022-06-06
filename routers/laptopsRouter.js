const express = require("express");
const laptopsRouter = express.Router();
const models = require("./../Models");

laptopsRouter.get("/", (req, res) => {
    models.Laptop.find({}, (err, results) => {
        if (err) console.log("an error occured");
        res.send(results);
    });
});

laptopsRouter.post("/", (req, res) => {
    const {laptopModel, price} = req.body;

    const laptop = new models.Laptop({laptopModel, price});

    laptop.save((err) => {
        if (err) res.status(500).send("error");
        res.send("Posted");
    });
})

module.exports = laptopsRouter;