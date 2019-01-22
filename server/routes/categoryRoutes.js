import { Router } from 'express';
import * as CategoryController from "../controllers/categoryController";

const categoryRoutes = Router();

categoryRoutes.get( '',CategoryController.getByCategory);
// categoryRoutes.post(CategoryController.createCategory);

export default categoryRoutes;
