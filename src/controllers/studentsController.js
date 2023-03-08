import Students from '../models/Aluno';
import Photo from '../models/photo';

class StudentsController {
  async index(req, res) {
    const students = await Students.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });
    res.json(students);
  }

  async store(req, res) {
    try {
      const student = await Students.create(req.body);
      return res.json(student);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }
      const student = await Students.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['student does not exist'],
        });
      }

      const newStudent = await student.update(req.body);

      return res.json(newStudent);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }
      const student = await Students.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['student does not exist'],
        });
      }

      await student.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['missing id'],
        });
      }
      const student = await Students.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['student does not exist'],
        });
      }

      return res.json(student);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentsController();
