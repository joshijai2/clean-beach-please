var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
  res.set({
      'Access-control-Allow-Origin': '*'
  });
})

module.exports = router;
