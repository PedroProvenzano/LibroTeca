// Action creator
const searchAction = (dispatch, search) => {
  dispatch({
    type: "SEARCH",
    payload: search,
  });
};

export default searchAction;
