const initState = [];
const categoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return { ...state, payload: action.payload };
    default:
      return { ...state };
  }
};

export default categoriesReducer;
