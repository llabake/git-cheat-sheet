import Category from "../model/category";
import { errorResponse, successResponse } from "../helpers/utils";
import Cheat from "../model/cheat";

// export const createCategory = async (req, res) => {
//   try {
//     const category = new Category (req.body);
//     await category.save();
//     return successResponse(res, 201, `Category successfully created`, category)
//   } catch (error) {
//     return errorResponse(res, 500, false, error.message);
//   }
// };

export const getByCategory = async (req, res) => {
  try {
    const categories = await Category.find().populate('cheats');
    return successResponse(res, 200,
      `Categories retrieved successfully`, categories);
  } catch (error) {
    return errorResponse(res, 500, false, error.message);
  }
};