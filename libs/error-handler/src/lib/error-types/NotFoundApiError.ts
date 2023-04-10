import { ApiResponseStatusCode } from '@libs/types';
import { BaseError } from '../BaseError';

export class NotFoundApiError extends BaseError {
  constructor(description = 'bad request') {
    super('NOT FOUND', ApiResponseStatusCode.NOT_FOUND, true, description);
  }
}
