import express from 'express';
const authRouter = express.Router();

import { authController } from '@infrastructure/controllers';

authRouter.get('/login', authController.signIn);

export default authRouter;
