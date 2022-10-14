import React, { useEffect, useState } from "react";
import axios from "axios";
import LeaderboardRow from "./LeaderboardRow";
import LeaderboardRowComponent from "./LeaderboardRowComponent";
import { IconContext } from "react-icons";
import "react-toastify/dist/ReactToastify.css";
import { BsQuestionCircleFill } from "react-icons/bs";
//username, componentLikes, follows, points;
const userdata = [
  {
    id: 1,
    username: "Ben",
    componentLikes: 123,
    follows: 2,
    points: 1000,
  },
  {
    id: 2,
    username: "Cathal123456789",
    componentLikes: 876,
    follows: 62,
    points: 1250,
  },
  {
    id: 3,
    username: "Thomas",
    componentLikes: 213,
    follows: 2234,
    points: 1000,
  },
  {
    id: 4,
    username: "Alec",
    componentLikes: 345,
    follows: 232,
    points: 3433,
  },
  {
    id: 5,
    username: "Luke",
    componentLikes: 390,
    follows: 35,
    points: 53646,
  },
];
const componentData = [
  {
    id: 1,
    name: "Button",
    favorites: 123,
    saves: 2,
    points: 1000,
  },
  {
    id: 2,
    name: "Slider",
    favorites: 876,
    saves: 62,
    points: 1250,
  },
  {
    id: 3,
    name: "Navbarthing",
    favorites: 213,
    saves: 2234,
    points: 1000,
  },
  {
    id: 4,
    name: "Footer",
    favorites: 345,
    saves: 232,
    points: 3433,
  },
  {
    id: 5,
    name: "Drop Down",
    favorites: 390,
    saves: 35,
    points: 53646,
  },
];

function Leaderboard() {
  const [topComponents, setTopComponents] = useState([]);
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
  return (
    <>
      <div className="leaderboard-main-container">
        <div className="leaderboard-user-main-container">
          {userdata.map((user, i) => (
            <LeaderboardRow
              key={user.id}
              id={user.id}
              order={i}
              username={`${
                user.username.length >= 12
                  ? user.username.slice(0, 12) + "..."
                  : user.username
              }`}
              componentLikes={user.componentLikes}
              follows={user.follows}
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
