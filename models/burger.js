var orm = require("../config/orm.js");

var burger = {
    all:function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColsVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;