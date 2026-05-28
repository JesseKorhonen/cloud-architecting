const mongoose = require('mongoose');
const GradeSchema = require('./Grade'); //Alidokumentin skeema
const StudentSchema = new mongoose.Schema({
  studentcode: {
    type: String,
    unique: true,
    required: true,
    match: /^[a-z]{1}[0-9]{4}$/,
  },
  name: { type: String, required: true, max: 80 },
  email: {
    type: String,
    required: true,
    match: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
  },
  studypoints: { type: Number, required: false, min: 0, max: 300 },
  grades: { type: [GradeSchema], required: true }, //Alidokumentin tyyppinä on sen skeema
});
const Student = mongoose.model('Student', StudentSchema);
// exportataan model
module.exports = Student;
