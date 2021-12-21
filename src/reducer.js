const initState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload.filter(
        (x) => x.home_team_country === "USA" || x.away_team_country === "USA"
      ) // change here to filter data
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default postReducer;