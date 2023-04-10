import { SignIn } from '@usecases/index';
import { AuthService } from '@infrastructure/services/auth.service';

const signIn = async (req, res) => {
  const signInUseCase = new SignIn(new AuthService());
  const { email, password } = req.body;
  signInUseCase
    .execute(email, password)
    .then((user) => res.json(user))
    .catch((err) => {
      console.error(err);
    });
};

export default {
  signIn,
};
