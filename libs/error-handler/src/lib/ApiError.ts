import { ApiResponseStatusCode } from '@libs/types';
import { BaseError } from './BaseError';

export class APIError extends BaseError {
  constructor(
    name: string,
    statusCode = ApiResponseStatusCode.INTERNAL_SERVER_ERROR,
    isOperational = true,
    description = 'internal server error'
  ) {
    super(name, statusCode, isOperational, description);
  }
}
