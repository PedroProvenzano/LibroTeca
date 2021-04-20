import axios from "axios";
import { urlBooks } from "../Api";
// Action creator
const fetchBooks = () => async (dispatch) => {
  // Fetch books
  const booksData = await axios.get(urlBooks);
  dispatch({
    type: "FETCH_BOOKS",
    payload: booksData.data,
  });
};

export default fetchBooks;
