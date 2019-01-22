import axios from 'axios';
import toastr from "toastr";
import { CATEGORIES, SEARCH_RESULTS } from "./actionTypes";

import { hostUrl } from "../helpers/utils";

const baseUrl = '/api/v1/categories';

const categories = data => ({ type: CATEGORIES, data });
const search = data => ({ type: SEARCH_RESULTS, data });

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(`${hostUrl}${baseUrl}`);
    const { data: { data, message } } = response;
    dispatch(categories(data));
    toastr.success(message);
  } catch (e) {
    throw (e);
  }
};

export const searchCategory = keyword => (dispatch, getState) => {
  const searchKeyword = keyword.trim();
  const searchResult = getState().categories
    .filter(category => category.title.includes(searchKeyword)
      || category.cheats.map(cheat => cheat.description.toLowerCase())
        .some(description => description.includes(searchKeyword)));
  dispatch(search(searchResult));
};
