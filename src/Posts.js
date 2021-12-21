import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./action";

function Posts() {
  const dispatch = useDispatch();
    const posts = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (posts.loading) {
      return <h1>Loading...</h1>;
      console.log("loading");
    }
  //

    return (
      <table className="table">
        <thead>
          <tr>
            <th>No. of games played at home</th>
            <th>Percentage win at home</th>
            <th>No. of games played away</th>
            <th>Percentage win away</th>
            <th>Total number of goals</th>
          </tr>
        </thead>

        <tbody>
          {posts &&
            posts.posts.map((el) => {
              // return <h3 key={el.fifa_id}>{el.venue}</h3>; // this is where you will set up the table

              return (
                <tr key={el.fifa_id}>
                  <td>{el.venue}</td>
                  <td>{el.location}</td>
                  <td>{el.status}</td>
                  <td>{el.time}</td>
                  <td>{el.weather.humidity}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  };

  return <div>{renderPosts()}</div>;
};

export default Posts;
