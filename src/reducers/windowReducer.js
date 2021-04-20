const initState = [];
const windowReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SIZE":
      return { ...state, payload: action.payload };
    default:
      return { ...state };
  }
};

export default windowReducer;
