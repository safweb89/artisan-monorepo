import { logger } from '@libs/logger';
import { ApiResponseStatusCode } from '@libs/types';

export class BaseError extends Error {
  public readonly name: string;
  public readonly statusCode: ApiResponseStatusCode;
  public readonly isOperational: boolean;

  constructor(
    name: string,
    statusCode: ApiResponseStatusCode,
    isOperational: boolean,
    description: string
  ) {
    super(description);
    Object.setPrototypeOf(this, BaseError.prototype);
    logger.error('base error',description)
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
