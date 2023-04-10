import { ApiResponseStatusCode } from '@libs/types';
import { BaseError } from '../BaseError';

export class NotImplementedApiError extends BaseError {
  constructor(description = 'Not Implemented') {
    super(
      'Not Implemented',
      ApiResponseStatusCode.NOT_IMPLEMENTED,
      true,
      description
    );
  }
}
