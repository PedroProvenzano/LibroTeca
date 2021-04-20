// Action creator
const windowSizeAction = () => async (dispatch) => {
  // Fetch books
  const sizeData = getWindowDimensions();
  dispatch({
    type: "GET_SIZE",
    payload: sizeData,
  });
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default windowSizeAction;
