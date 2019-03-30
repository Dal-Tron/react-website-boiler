export default (state = {}, action) => {
  switch (action.type) {
    case "SET_VIEWPORT_WIDTH":
      return {
        ...state,
        width: action.width
      };
    case "SET_VIEWPORT_HEIGHT":
      return {
        ...state,
        height: action.height
      };
    default:
      return state;
  }
};
