const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentcontroller');
const authorize = require('../verifytoken'); // authorisointi eli vahvistetaan token
router.get('/', StudentController.findAll);
router.get('/:id', StudentController.findById);
router.get('/studentcode/:studentcode', StudentController.findByStudentcode);
router.post('/', authorize, StudentController.createstudent);
router.delete('/:id', authorize, StudentController.deleteById);
router.put('/:studentcode', authorize, StudentController.updateStudent);
router.get('/studypoints/:studypoints', StudentController.findByStudypoints);
router.post(
  '/studentcode/:studentcode',
  authorize,
  StudentController.addNewGrade
);
router.put(
  '/studentcode/:studentcode',
  authorize,
  StudentController.updateGrade
);
router.get('/grades/:coursecode', StudentController.findStudents);
module.exports = router;
