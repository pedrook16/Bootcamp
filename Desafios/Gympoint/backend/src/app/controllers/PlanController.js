import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plan = await Plan.findAll();
    return res.json(plan);
  }
  async store(req, res) {
    const plan = await Plan.create(req.body);
    return res.json(plan);
  }
  async update(req, res) {
    // const plan = await Plan.update({
    //   where: { id: req.params.id },

    // })
    return res.json();
  }
  async delete(req, res) {
    // const plan = await Plan.create(req.body);
    return res.json();
  }
}

export default new PlanController();
