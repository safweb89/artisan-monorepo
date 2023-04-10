import { ApiResponseStatusCode } from '@libs/types';
import { BaseError } from '../BaseError';

export class ServiceUnavailableApiError extends BaseError {
  constructor(description = 'Service Unavailable') {
    super(
      'Service Unavailable',
      ApiResponseStatusCode.SERVICE_UNAVAILABLE,
      true,
      description
    );
  }
}
