import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    try {
      const students = await Students.create(req.body);

      return res.json(students);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new StudentsController();
