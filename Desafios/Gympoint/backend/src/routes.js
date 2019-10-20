import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';
import PlanController from './app/controllers/PlanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/students', StudentsController.store);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
// routes.put('/plans/:id', PlanController.update);
// routes.detele('/plans/:id', PlanController.delete);

export default routes;
