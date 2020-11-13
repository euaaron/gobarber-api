import { Router } from 'express';

const certbotRouter = Router();

const certbotDir = process.env.CERTBOT?.split('.')[0];

certbotRouter.get(
  `/acme-challenge/${certbotDir}`,
  async (request, response) => {
    response.send(process.env.CERTBOT);
  },
);

export default certbotRouter;
