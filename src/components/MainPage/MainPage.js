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
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import {
  BsQuestionCircleFill,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";

function MainPage() {
  //   const [users, setUsers] = React.useState([]);
  const [components, setComponents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [componentsPerPage, setComponentsPerPage] = React.useState(6);

  const dispatch = useDispatch();
  dispatch(getSingleUser());

  React.useEffect(() => {
    async function getComponents() {
      const { data } = await axios.get("/api/components");
      setComponents(data);
      setIsLoading(false);
    }
    getComponents();
  }, []);

  const lastPostIndex = currentPage * componentsPerPage;
  const firstPostIndex = lastPostIndex - componentsPerPage;
  const currentComponents = components.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(components.length / componentsPerPage);

  const nextPage = (event) => {
    event.preventDefault();
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = (event) => {
    event.preventDefault();
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          <div className="mainPage-button-container">
            <button onClick={previousPage} className="main-page-prev-button">
              <IconContext.Provider
                value={{
                  size: "30px",
                  className: "main-page-pagination-arrow",
                }}
              >
                <BsArrowLeftShort />
              </IconContext.Provider>
            </button>
            <button onClick={nextPage} className="main-page-next-button">
              <IconContext.Provider
                value={{
                  size: "30px",
                  className: "main-page-pagination-arrow",
                }}
              >
                <BsArrowRightShort />
              </IconContext.Provider>
            </button>
            <div className="main-page-list-content-container">
              {isLoading && <ContentSkeleton cards={9} />}
              {currentComponents.map((component, i) => {
                return (
                  <div>
                    <ComponentCard
                      componentId={component.id}
                      key={component.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
