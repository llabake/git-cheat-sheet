import { Router } from 'express';
import userRoutes from "./userRoutes";
import cheatRoutes from "./cheatRoutes";
import categoryRoutes from "./categoryRoutes";

const router = Router();

const baseUrl = '/api/v1';
router.use(`${baseUrl}/users`, userRoutes);
router.use(`${baseUrl}/cheats`, cheatRoutes);
router.use(`${baseUrl}/categories`, categoryRoutes);

export default router;
