const initState = [];
const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return { ...state, payload: action.payload };
    default:
      return { ...state };
  }
};

export default bookReducer;
