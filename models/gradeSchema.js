const mongoose = require("mongoose")
const gradeSchema = mongoose.Schema({
grade: {  type: String,
    minlength: [ 1, "Minimum value is 1"],
    maxlength: [ 1, "Maximum value is 1"] },
gradeCourse: String,
gradeMarks:{  type: Number,
    min: [0, "Minimum value is 0"],
    max: [100,"Minimum value is 100"] }
})
module.exports = mongoose.model("grade",
gradeSchema)

// We can seed the collection if needed on
