import Axios from "axios";

export const fetchPosts = () => {   
  return async (dispatch, getState) => {
    const response = await Axios.get("http://worldcup.sfg.io/matches");
    console.log(response.data);

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};


