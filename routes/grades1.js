var express = require('express');
const grade_controlers= require('../controllers/grade1');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}


router.get('/detail', grade_controlers.grade_view_one_Page);
/* GET create grade page */
router.get('/create', grade_controlers.grade_create_Page);
/* GET create update page */
router.get('/update',secured, grade_controlers.grade_update_Page);
/* GET delete grade page */
router.get('/delete', grade_controlers.grade_delete_Page);
/* router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });   */

module.exports = router;
