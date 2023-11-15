var express = require('express');
const grade_controlers= require('../controllers/grade1');
var router = express.Router();

router.get('/detail', grade_controlers.grade_view_one_Page);
/* GET create grade page */
router.get('/create', grade_controlers.grade_create_Page);
/* GET create update page */
router.get('/update', grade_controlers.grade_update_Page);
/* GET delete grade page */
router.get('/delete', grade_controlers.grade_delete_Page);

module.exports = router;
