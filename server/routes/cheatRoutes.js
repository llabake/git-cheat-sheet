import { Router } from 'express';
import * as CheatController from "../controllers/cheatController";

const cheatRoutes = Router();

cheatRoutes.get('', CheatController.fetchAllCheats);
// cheatRoutes.post(CheatController.createCheat);

export default cheatRoutes;
