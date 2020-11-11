import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: number;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, auth.secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub.toString(),
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid Token', 401);
  }
}
