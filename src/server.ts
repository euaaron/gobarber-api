import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import { tmpFolder } from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();
const port = 80;
const host = process.env.HOST || 'localhost';

app.use(cors());

app.use(express.json());

app.use('/files', express.static(tmpFolder));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(`${host}:${port}`, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server started on port ${port}.`);
});
