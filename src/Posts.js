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

    let homeGames = posts.items.reduce((count, el) => {
      if (el.home_team_country === "USA") count++;
      return count;
    }, 0);

    let awayGames = posts.items.reduce((count, el) => {
      if (el.away_team_country === "USA") count++;
      return count;
    }, 0);

    let pctHomeWin = Math.round((homeGames / 7) * 100);
    let pctAwayWin = Math.round((awayGames / 7) * 100);

    let homeGoals = posts.items.reduce((homeCount, el) => {
      if (el.home_team_country === "USA")
        homeCount += parseInt(el.home_team.goals);
      return homeCount;
    }, 0);

    let awayGoals = posts.items.reduce((awayCount, el) => {
      if (el.away_team_country === "USA")
        awayCount += parseInt(el.away_team.goals);
      return awayCount;
    }, 0);

    let totGoals = homeGoals + awayGoals;

    // return value.items.map(el => {})
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
            posts.items.map((el) => {
              // this is where you will set up the table
              return (
                <tr key={el.fifa_id}>
                  <td>{homeGames}</td>
                  <td>{pctHomeWin}</td>
                  <td>{awayGames}</td>
                  <td>{pctAwayWin}</td>
                  <td>{totGoals}</td>
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
