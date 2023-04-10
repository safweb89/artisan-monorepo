import { ApiResponseStatusCode } from '@libs/types';
import { BaseError } from '../BaseError';

export class BadGatewayApiError extends BaseError {
  constructor(description = 'Bad Gateway') {
    super(
      'Bad Gateway',
      ApiResponseStatusCode.BAD_GATEWAY,
      true,
      description
    );
  }
}
