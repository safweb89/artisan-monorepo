import { Request, Response } from 'express';
import { logger } from '@libs/logger';
import { BaseError } from './BaseError';

class ErrorHandler {
  public async handleError(
    err: Error,
    _req: Request,
    res: Response
  ): Promise<void> {
    await logger.error(
      'Error message from the centralized error-handling component',
      err
    );

    res.send(err);
    //await sendMailToAdminIfCritical();
    //await sendEventsToSentry();
  }

  public isTrustedError(error: Error) {
    if (error instanceof BaseError) {
      return error.isOperational;
    }
    return false;
  }
}
export const errorHandler = new ErrorHandler();
