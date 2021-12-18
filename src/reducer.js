const initState = [];

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
