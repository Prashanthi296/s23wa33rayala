var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('mydata', { title: 'Prashanthi Rayala' });
});

module.exports = router;