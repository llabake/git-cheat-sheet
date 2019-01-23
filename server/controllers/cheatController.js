// TODO: create cheat, get all cheats, update cheat delete cheat
import Cheat from "../model/cheat";

import { errorResponse, successResponse } from "../helpers/utils";

export const fetchAllCheats = async (req, res) => {
  try {
    const cheats = await Cheat.find().populate('category', 'name');
    return successResponse(res, 200, `Cheats retrieved successfully`, cheats);
  } catch (error) {
    return errorResponse(res, 500, false, error.message);
  }
};
