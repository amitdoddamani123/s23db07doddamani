var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var grade_controller = require('../controllers/grade');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// grade ROUTES ///
// POST request for creating a grade.
router.post('/grades', grade_controller.grade_create_post);
// DELETE request to delete grade.
router.delete('/grades/:id', grade_controller.grade_delete);
// PUT request to update grade.
router.put('/grades/:id', grade_controller.grade_update_put);
// GET request for one grade.
router.get('/grades/:id', grade_controller.grade_detail);
// GET request for list of all grade items.
router.get('/grades', grade_controller.grade_list);
module.exports = router;