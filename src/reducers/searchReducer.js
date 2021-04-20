const searchReducer = (state = null, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, payload: action.payload };
    default:
      return { ...state };
  }
};

export default searchReducer;
