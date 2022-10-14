import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContentSkeleton from "./ContentSkeleton";
import Leaderboard from "./Leaderboard";
import "react-toastify/dist/ReactToastify.css";
import ComponentCard from "./ComponentCard";
import Sidebar from "./Sidebar";
import axios from "axios";
import { getSingleUser } from "../../store/users/singleUserSlice";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { BsQuestionCircleFill } from "react-icons/bs";

function MainPage() {
  //   const [users, setUsers] = React.useState([]);
  const [components, setComponents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  //   React.useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((users) => {
  //         setUsers(users);
  //         setIsLoading(false);
  //       });
  //   }, []);
  React.useEffect(() => {
    async function getComponents() {
      const { data } = await axios.get("/api/components");

      setComponents(data);
      setIsLoading(false);
    }
    getComponents();
    dispatch(getSingleUser());
  }, []);

  return (
    <div className="main-page-main-container">
      <div className="main-page-wrapper">
        <div className="main-page-category-container">
          {isLoading && <Skeleton containerClassName="skeleton-container" />}
          <Sidebar />
        </div>
        <div className="main-page-content-container">
          <div className="main-page-featured-container">
            {isLoading && <Skeleton containerClassName="skeleton-container" />}
            <div className="leaderboard-user-title-container">
              <div className="leaderboard-top-users">
                Top Users{" "}
                <div className="leaderboard-tooltip">
                  <IconContext.Provider
                    value={{
                      size: "20px",
                      className: "leaderboard-row-icon-coins",
                    }}
                  >
                    <BsQuestionCircleFill />
                  </IconContext.Provider>
                  <span className="tooltiptext-q">
                    You earn points when users follow you, or save and/or
                    favorite your components. Get points, earn badges, and climb
                    to the top of the leaderboard!
                  </span>
                </div>
              </div>
              <div className="leaderboard-top-users">
                Top Components{" "}
                <div className="leaderboard-tooltip">
                  <IconContext.Provider
                    value={{
                      size: "20px",
                      className: "leaderboard-row-icon-coins",
                    }}
                  >
                    <BsQuestionCircleFill />
                  </IconContext.Provider>
                  <span className="tooltiptext-q">
                    Points are awarded based on the combined number of favorites
                    and saves. Favorites are worth 10, saves are worth 20.
                  </span>
                </div>
              </div>
            </div>
            <Leaderboard />
          </div>
          <div className="main-page-list-content-container">
            {isLoading && <ContentSkeleton cards={9} />}
            {components.map((component, i) => {
              return (
                <div>
                  <ComponentCard componentId={component.id} key={i} />
                </div>
              );
            })}
            {/* {users.map((user, i) => {
              return (
                <div key={i} className="main-page-content-list-element">
                  {user.name}
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
