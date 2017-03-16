var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    
    var burgers = { burgers: data};

    res.render("index", burgers);
  });
});

router.post("/", function(req, res) {
    
    var name = req.body.name;

    burger.create(name, function(data){
      console.log(data);
      res.redirect("/");
    })
});
  

router.put("/:id", function(req, res) {
  
  var name  = req.params.id;
  console.log(name);

  burger.update(name, function(data){
    console.log(data);
    res.redirect("/")
    })
});



// Export routes for server.js to use.
module.exports = router;