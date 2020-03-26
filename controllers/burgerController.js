const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get("/", (req, res) => {
    burger.all(data => {
        const object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create("name", req.body.name, result => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else res.status(200).end();
    });
});

module.exports = router