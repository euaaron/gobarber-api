import { Router } from 'express';
import AuthService from '../services/AuthService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authService = new AuthService();

  const { user, token } = await authService.execute({
    email,
    password,
  });
  delete user.password;
  return response.json({ user, token });
});

export default sessionsRouter;
