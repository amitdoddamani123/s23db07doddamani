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
    res.render('grades', { title: 'grade Search Results', results: theGrades });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// for a specific grade.
exports.grade_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await grade.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
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
exports.grade_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await grade.findById( req.params.id)
// Do updates of properties
if(req.body.grade_type)
toUpdate.grade_type = req.body.grade_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

