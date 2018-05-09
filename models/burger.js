var orm = require("../config/orm.js");

console.log("HITTING MODEL");

var burger = {

    all:function(cb) {
        orm.selectAll("burgers", function(res) {
            cb([]);
        })

    },

    // all:function(cb) {
    //     console.log("hitting model.burger.all");
    //     orm.selectAll("burger", function(res) {
    //         console.log("hitting model.burger.all.orm.selectAll")
    //         cb(res);
    //     });
    // },
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColsVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;