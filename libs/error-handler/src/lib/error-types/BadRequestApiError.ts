import { ApiResponseStatusCode } from '@libs/types';
import { BaseError } from '../BaseError';

export class BadRequestApiError extends BaseError {
  constructor(description = 'bad request') {
    super('Bad Request', ApiResponseStatusCode.BAD_REQUEST, true, description);
  }
}
