import Category from "../model/category";
import { errorResponse, successResponse } from "../helpers/utils";

export const getByCategory = async (req, res) => {
  try {
    const categories = await Category.find().populate('cheats');
    return successResponse(res, 200,
      `Categories retrieved successfully`, categories);
  } catch (error) {
    return errorResponse(res, 500, false, error.message);
  }
};