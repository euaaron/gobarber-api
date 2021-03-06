import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import certbotRouter from './certbot.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('The GoBarber API is Running!');
});
routes.use('/.well-known', certbotRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
