import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    const students = await Students.create(req.body);

    return res.json(students);
  }
}

export default new StudentsController();
