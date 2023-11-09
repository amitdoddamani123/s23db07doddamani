const mongoose = require("mongoose")
const gradeSchema = mongoose.Schema({
grade: String,
gradeMarks: Number,
gradeCourse: String
})
module.exports = mongoose.model("grade",
gradeSchema)

// We can seed the collection if needed on
