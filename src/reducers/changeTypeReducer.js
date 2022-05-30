const changeTypeReducer = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_TYPE":
      return !state;
    default:
      return state;
  }
};

export default changeTypeReducer;
