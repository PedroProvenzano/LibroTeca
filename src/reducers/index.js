import { combineReducers } from "redux";

// Reducers
import loggedReducer from "./isLogged";
import bookReducer from "./bookReducer";
import categoriesReducer from "./categoriesReducer";
import searchReducer from "./searchReducer";
import windowReducer from "./windowReducer";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  libros: bookReducer,
  categorias: categoriesReducer,
  buscar: searchReducer,
  windowSize: windowReducer,
});

export default allReducers;
