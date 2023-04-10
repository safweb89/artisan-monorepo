import { IAuthService, User } from '../../domain';

export class AuthService implements IAuthService {
  signIn(email: string, password: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
