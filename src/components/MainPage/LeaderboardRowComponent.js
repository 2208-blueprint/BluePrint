import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCoins, FaHeart, FaSave } from "react-icons/fa";

function LeaderboardRowComponent({
  order,
  name,
  favorites,
  saves,
  points,
  id,
}) {
  return (
    <div
      className={
        order === 0 ? "leaderboard-first" : "leaderboard-user-info-container"
      }
    >
      <div className="leaderboard-user-info-username">
        <div style={{ marginRight: "5px", pointerEvents: "none" }}>{`${
          order + 1 + "." + " "
        }`}</div>

        <Link
          to={`components/${id}`}
          style={{ textDecoration: "none" }}
        >{`${name}`}</Link>
      </div>
      <div className="leaderboard-user-info-saves">
        {" "}
        <div className="leaderboard-tooltip">
          <IconContext.Provider
            value={{ size: "16px", className: "leaderboard-row-icon" }}
          >
            <FaHeart />
          </IconContext.Provider>

          <span className="tooltiptext">Total component favorites</span>
          {favorites}
        </div>
      </div>
      <div className="leaderboard-user-info-follows">
        {" "}
        <div className="leaderboard-tooltip">
          <IconContext.Provider
            value={{ size: "16px", className: "leaderboard-row-icon-follow" }}
          >
            <FaSave />
          </IconContext.Provider>
          <span className="tooltiptext">Total saves</span>
          {saves}
        </div>
      </div>
      <div className="leaderboard-user-info-points">
        {" "}
        <div className="leaderboard-tooltip">
          <IconContext.Provider
            value={{ size: "16px", className: "leaderboard-row-icon-coins" }}
          >
            <FaCoins />
          </IconContext.Provider>
          <span className="tooltiptext">Total BluePrint points</span>
          {points}
        </div>
      </div>
    </div>
  );
}

export default LeaderboardRowComponent;
