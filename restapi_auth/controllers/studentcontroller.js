/*
Kontrolleri on olio, joka sisältää metodeja. Se tehty siksi, että
saadaan erotettua reitit ja tietokantahakujen sovelluslogiikka toisistaan.
Se on siis arkkitehtuuriratkaisu. Eli saamme aikaan järkevämmän arkkitehtuurin
kun jaamme eri asioita tekevän koodin eri tiedostoihin ja kansioihin.
*/

const Student = require('../models/Student'); // haetaan model

// Tietokannan käsittelymetodit tehdään olion sisään
const StudentController = {
  /* findAll -metodi hakee kaikki opiskelijat
  Student-modelin find-metodilla */
  findAll(req, res) {
    Student.find()
      .then((students) => {
        res.json(students);
      })
      .catch((error) => {
        throw error;
      });
  },
  findById(req, res) {
    Student.findOne({ _id: req.params.id })
      .then((student) => {
        res.json(student);
      })
      .catch((error) => {
        throw error;
      });
  },
  findByStudentcode(req, res) {
    Student.findOne({ studentcode: req.params.studentcode })
      .then((student) => {
        res.json(student);
      })
      .catch((error) => {
        throw error;
      });
  },
  async createstudent(req, res) {
    const student = await Student.create(req.body).catch((error) => {
      throw error;
    });
    res.json(student);
  },
  deleteById(req, res) {
    Student.findOneAndDelete({ _id: req.params.id })
      .then((student) => {
        res.json(student);
      })
      .catch((error) => {
        throw error;
      });
  },
  updateStudent(req, res) {
    Student.findOneAndUpdate(
      { studentcode: req.params.studentcode },
      { $set: req.body },
      { new: true }
    )
      .then((student) => {
        res.json(student);
      })
      .catch((error) => {
        throw error;
      });
  },
  findByStudypoints(req, res) {
    Student.find({ studypoints: { $lt: req.params.studypoints } })
      .then((students) => {
        res.json(students);
      })
      .catch((error) => {
        throw error;
      });
  },
  addNewGrade(req, res) {
    Student.findOneAndUpdate(
      { studentcode: req.params.studentcode },
      { $push: { grades: req.body }, $inc: { studypoints: 5 } }
    )
      .then((students) => {
        res.json(students);
      })
      .catch((error) => {
        throw error;
      });
  },
  updateGrade(req, res) {
    Student.findOneAndUpdate(
      {
        studentcode: req.params.studentcode,
        'grades.coursecode': req.body.coursecode,
      },
      { $set: { 'grades.$': req.body } },
      { new: true }
    )
      .then((student) => {
        res.json(student);
      })
      .catch((error) => {
        throw error;
      });
  },
  findStudents(req, res) {
    Student.find({
      'grades.coursecode': req.params.coursecode,
    })
      .then((students) => {
        res.json(students);
      })
      .catch((error) => {
        throw error;
      });
  },
  updateStudentById(req, res) {
    Student.findOneAndUpdate();
  },
};

module.exports = StudentController;

/*

students.js -reittitiedostossa kontrollerin metodia kutsutaan tällä tavalla:
router.get('/', StudentController.findAll);
 
jolloin kaikki opiskelijat saadaan JSON-muodossa osoitteesta http://localhost:3000/students/

*/
