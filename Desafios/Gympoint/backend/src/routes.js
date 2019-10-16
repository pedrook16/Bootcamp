import { Router } from 'express';

const routes = new Router();

routes.get('/', async (req, res) => {
  res.json({ ok: true });
});

export default routes;
