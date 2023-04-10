import { IAuthService, User } from '../domain';

export class SignIn {
  constructor(private readonly authService: IAuthService) {}
  async execute(email: string, password: string): Promise<User> {
    return this.authService.signIn(email, password);
  }
}
