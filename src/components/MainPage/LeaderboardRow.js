import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCheckFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillBookmarkHeartFill, BsQuestionCircleFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";

function LeaderboardRow({
  order,
  username,
  componentCount,
  followerCount,
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
          to={`users/${id}`}
          style={{ textDecoration: "none" }}
        >{`${username}`}</Link>
      </div>
      <div className="leaderboard-user-info-saves">
        {" "}
        <div className="leaderboard-tooltip">
          <IconContext.Provider
            value={{ size: "16px", className: "leaderboard-row-icon" }}
          >
            <BsFillBookmarkHeartFill />
          </IconContext.Provider>

          <span className="tooltiptext">Published components</span>
        </div>
        {componentCount}
      </div>
      <div className="leaderboard-user-info-follows">
        {" "}
        <div className="leaderboard-tooltip">
          <IconContext.Provider
            value={{ size: "16px", className: "leaderboard-row-icon-follow" }}
          >
            <BsPersonCheckFill />
          </IconContext.Provider>
          <span className="tooltiptext">Total followers</span>
          {followerCount}
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

export default LeaderboardRow;
