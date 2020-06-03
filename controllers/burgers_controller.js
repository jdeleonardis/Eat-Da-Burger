var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//index - html render
router.get("/", function(req, res) {
  burger.all(function(data) {
    //hbsObject is the object we are sending to the index.handlebars
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//create a burger
router.post("/api/burger", function(req, res) {
  burger.create("burger_name", req.body.burger, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


//update a burger - set devoured = 1 - eaten burger
 router.put("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

   burger.update("devoured","id",req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
