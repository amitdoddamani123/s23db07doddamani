var express = require('express');
const grade_controlers= require('../controllers/grade');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('grades', { title: 'Search Results Grades' });

  router.get('/', grade_controlers.grade_view_all_Page );

});

module.exports = router;
