import axios from "axios";
import { urlCategories } from "../Api";
// Action creator
const fetchCategories = () => async (dispatch) => {
  // Fetch categories
  const categoriesData = await axios.get(urlCategories);
  dispatch({
    type: "FETCH_CATEGORIES",
    payload: categoriesData.data,
  });
};

export default fetchCategories;
