var grade = require('../models/gradeSchema');
// List of all grades
// Handle a show one view with id specified by query
exports.grade_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await grade.findById( req.query.id)
    res.render('gradesdetail',
    { title: 'grade Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a grade.
// No body, no in path parameter, no query.
// Does not need to be async
exports.grade_create_Page = function(req, res) {
console.log("create view")
try{
res.render('gradescreate', { title: 'grade Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a grade.
// query provides the id
exports.grade_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await grade.findById(req.query.id)
    res.render('gradesupdate', { title: 'grade Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.grade_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await grade.findById(req.query.id)
    res.render('gradesdelete', { title: 'grade Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


