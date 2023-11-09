var grade = require('../models/gradeSchema');
// List of all grades
exports.grade_list = async function(req, res) {
    try{
    theGrades = await grade.find();
    res.send(theGrades);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.grade_view_all_Page = async function(req, res) {
    try{
    theGrades = await grade.find();
    res.render('grades', { title: 'grade Search Results', result: theGrades });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// for a specific grade.
exports.grade_detail = function(req, res) {
res.send('NOT IMPLEMENTED: grade detail: ' + req.params.id);
};
// Handle grade create on POST.
exports.grade_create_post = async function(req, res) {
    console.log(req.body)
    let document = new grade();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"grade_type":"goat", "cost":12, "size":"large"}
    document.grade = req.body.grade;
    document.gradeMarks = req.body.gradeMarks;
    document.gradeCourse = req.body.gradeCourse;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle grade delete form on DELETE.
exports.grade_delete = function(req, res) {
res.send('NOT IMPLEMENTED: grade delete DELETE ' + req.params.id);
};
// Handle grade update form on PUT.
exports.grade_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: grade update PUT' + req.params.id);
};

