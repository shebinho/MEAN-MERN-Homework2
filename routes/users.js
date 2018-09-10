var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    firstName: "Wekoslav",
    lastName: "Stefanovski"
  });
});

module.exports = router;
