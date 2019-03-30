export default (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SERVICEWORKER": {
      return {
        ...state,
        serviceWorkerUpdated: true
      };
    }
    default:
      return state;
  }
};
