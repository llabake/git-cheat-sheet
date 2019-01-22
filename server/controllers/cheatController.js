// TODO: create cheat, get all cheats, update cheat delete cheat
import Cheat from "../model/cheat";
import Category from "../model/category";
import User from "../model/user";
import { errorResponse, successResponse } from "../helpers/utils";

export const fetchAllCheats = async (req, res) => {
  try {
    const cheats = await Cheat.find().populate('category', 'name');
    return successResponse(res, 200, `Cheats retrieved successfully`, cheats);
  } catch (error) {
    return errorResponse(res, 500, false, error.message);
  }
};

// export const createCheat = async (req, res) => {
//   try {
//     const cheat = new Cheat(req.body);
//     await cheat.save();
//     const category = await Category.findById(req.body.category);
//     category.cheats.push(cheat);
//     category.save();
//     return successResponse(res, 201,
//       `You have successfully created cheat: ${cheat.header}`, cheat);
//   } catch (error) {
//     return res.status(400).send({
//       error: error.message,
//     });
//   }
// };
