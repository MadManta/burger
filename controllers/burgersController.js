var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// router.get("/", function (req, res) {
//         var hbsObject = {
//             burger: data
//         };
//         console.log(hbsObject);
// });

router.get("/", function (req, res) {
    console.log("hitting burgersController's router.get");
    burger.all(function(data) {
        console.log("hitting burgersController's router.get TWICE")
        res.render("index");
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;