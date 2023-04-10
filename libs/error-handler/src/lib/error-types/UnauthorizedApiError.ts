import { ApiResponseStatusCode } from '@libs/types';
import { BaseError } from '../BaseError';

export class UnauthorizedApiError extends BaseError {
  constructor(description = 'unauthorized') {
    super('Unauthorized', ApiResponseStatusCode.UNAUTHORIZED, true, description);
  }
}
