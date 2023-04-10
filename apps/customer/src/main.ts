/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';
import v1CustomerRouter from './v1/routes/customerRoutes';
import { errorHandler } from '@libs/error-handler';
import { logger } from '@libs/logger';
const app = express();

logger.info('Starting');

// create application/json parser
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/v1/customers', v1CustomerRouter);

// middlewares
app.use(
  '*',
  async (err: Error, _req: Request, _res: Response, next: NextFunction) => {
    logger.info('catching error Middleware', err);
    if (!errorHandler.isTrustedError(err)) {
      logger.info('catching non trusted error Middleware', err);
      next(err);
    }
    logger.debug('Trusted error Middleware', err);
    await errorHandler.handleError(err, _req, _res);
  }
);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

// get the unhandled rejection and throw it to another fallback handler we already have.
process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
  logger.debug('unhandled rejection', reason);
  throw reason;
});

process.on('uncaughtException', (error: Error, req: Request, res: Response) => {
  logger.debug('uncaughtException', error);
  errorHandler.handleError(error, req, res);
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});
