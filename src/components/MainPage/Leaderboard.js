import React, { useEffect, useState } from "react";
import axios from "axios";
import LeaderboardRow from "./LeaderboardRow";
import LeaderboardRowComponent from "./LeaderboardRowComponent";
import "react-toastify/dist/ReactToastify.css";

function Leaderboard() {
  const [topComponents, setTopComponents] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  useEffect(() => {
    const getTopComponents = async () => {
      const { data } = await axios.get("api/admin/top-components");
      const parsedData = data.map((component) => {
        let favorites = 0;
        let saves = 0;
        for (let i = 0; i < component.users.length; i++) {
          const user = component.users[i];
          if (user["user_component"]?.isFavorite) {
            favorites++;
          }
          if (user["user_component"]?.isSaved) {
            saves++;
          }
        }

        return {
          id: component.id,
          name: component.name,
          favorites,
          saves,
          points: component.currentPoints,
        };
      });
      setTopComponents(parsedData);
    };
    getTopComponents();
  }, []);

  useEffect(() => {
    const getTopUsers = async () => {
      const { data } = await axios.get("api/admin/top-users");
      const parsedData = [];
      console.log(data[0]);
      for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const followers = await axios.get(`api/users/${user.id}/followers`);
        const followerCount = followers.data.length;
        const componentCount = user.components.length;

        parsedData.push({
          id: user.id,
          username: user.username,
          componentCount,
          followerCount,
          points: user.currentPoints,
        });
      }
      setTopUsers(parsedData);
    };
    getTopUsers();
  }, []);
  return (
    <>
      <div className="leaderboard-main-container">
        <div className="leaderboard-user-main-container">
          {topUsers.map((user, i) => (
            <LeaderboardRow
              key={user.id}
              id={user.id}
              order={i}
              username={`${
                user.username.length >= 12
                  ? user.username.slice(0, 12) + "..."
                  : user.username
              }`}
              componentCount={user.componentCount}
              followerCount={user.followerCount}
              points={user.points}
            />
          ))}
        </div>
        <div className="leaderboard-component-main-container">
          {" "}
          {topComponents.map((component, i) => (
            <LeaderboardRowComponent
              key={component.id}
              id={component.id}
              order={i}
              name={`${
                component.name.length >= 12
                  ? component.name.slice(0, 12) + "..."
                  : component.name
              }`}
              favorites={component.favorites}
              saves={component.saves}
              points={component.points}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
