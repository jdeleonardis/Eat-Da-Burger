// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(col, value, cb) {
    orm.insertOne("burgers", col, value, function(res) {
      cb(res);
    });
  },
  //devoured, id, "passed id"
  update: function(col1, col2, val2, cb) {
    orm.updateOne("burgers", col1, col2, "1", val2, function(res) {
      cb(res);
    });
  }

};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;