import { ApiResponseStatusCode } from '@libs/types';
import { BaseError } from '../BaseError';

export class MethodNotAllowedApiError extends BaseError {
  constructor(description = 'Method Not Allowed') {
    super(
      'Method Not Allowed',
      ApiResponseStatusCode.METHOD_NOT_ALLOWED,
      true,
      description
    );
  }
}
