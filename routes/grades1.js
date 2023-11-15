var express = require('express');
const grade_controlers= require('../controllers/grade1');
var router = express.Router();

router.get('/detail', grade_controlers.grade_view_one_Page);
/* GET create grade page */
router.get('/create', grade_controlers.grade_create_Page);

module.exports = router;
