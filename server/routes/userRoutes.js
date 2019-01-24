import { Router } from 'express';
import UserController from "../controllers/userController";

const userRoutes = Router();

userRoutes.post(`/signup`, UserController.signUp);
userRoutes.post(`/login`, UserController.signIn);

export default userRoutes;
