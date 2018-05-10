var orm = require("../config/orm.js");

console.log("HITTING MODEL");

var burger = {

    all:function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            console.log(res);
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