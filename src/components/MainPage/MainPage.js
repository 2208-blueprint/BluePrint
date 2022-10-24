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

function MainPage({ showScroll, width }) {
  //   const [users, setUsers] = React.useState([]);
  const [components, setComponents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [componentsPerPage, setComponentsPerPage] = React.useState(8);
  const [sortedComponents, setSorted] = React.useState([]);
  const [test, setTest] = React.useState(true);
  // const [loadRight, setLoadRight] = React.useState(false);
  // const [loadLeft, setLoadLeft] = React.useState(false);

  const dispatch = useDispatch();
  dispatch(getSingleUser());

  React.useEffect(() => {
    if (width > 1300) setComponentsPerPage(8);
    else setComponentsPerPage(4);
  }, [width]);

  React.useEffect(() => {
    async function getComponents() {
      const { data } = await axios.get("/api/components");
      setComponents(data);
      setIsLoading(false);
      setSorted(data);
    }
    getComponents();
    dispatch(getSingleUser());
  }, []);

  const nextPage = (event) => {
    event.preventDefault();
    if (currentPage !== totalPages) {
      // setLoadRight(true);
      // setLoadLeft(false);
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = (event) => {
    event.preventDefault();
    if (currentPage !== 1) {
      // setLoadLeft(true);
      // setLoadRight(false);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function sortHandler(event) {
    event.preventDefault();
    let oldArray = components;
    if (event.target.value === "popular") {
      oldArray.sort((a, b) => {
        return b.currentPoints - a.currentPoints;
      });
    } else if (event.target.value === "newest") {
      oldArray.sort((a, b) => {
        let bTime = b.createdAt;
        let aTime = a.createdAt;
        return bTime.localeCompare(aTime);
      });
    } else {
      oldArray.sort((a, b) => {
        let bTime = b.createdAt;
        let aTime = a.createdAt;
        return aTime.localeCompare(bTime);
      });
    }
    setSorted(oldArray);
    setTest(!test);
  }

  const lastPostIndex = currentPage * componentsPerPage;
  const firstPostIndex = lastPostIndex - componentsPerPage;
  const currentComponents = sortedComponents.slice(
    firstPostIndex,
    lastPostIndex
  );
  const totalPages = Math.ceil(sortedComponents.length / componentsPerPage);

  return (
    <div className="main-page-main-container">
      <div className="main-page-wrapper">
        <div className="main-page-category-container">
          {isLoading && <Skeleton containerClassName="skeleton-container" />}
          <Sidebar />
        </div>
        <div className="main-page-content-container">
          {showScroll && (
            <button className="scrollButton" onClick={handleScroll}>
              &#8963;
            </button>
          )}
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
          <div className="mainPage-sort-container">
            <p>Sort By:</p>
            <select onChange={sortHandler}>
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          <div className="mainPage-button-container">
            {currentPage === 1 ? null : (
              <button onClick={previousPage} className="main-page-prev-button">
                <IconContext.Provider
                  value={{
                    size: "40px",
                    className: "main-page-pagination-arrow-right",
                  }}
                >
                  <BsArrowLeftShort />
                </IconContext.Provider>
              </button>
            )}

            {currentPage === totalPages ? null : (
              <button onClick={nextPage} className="main-page-next-button">
                <IconContext.Provider
                  value={{
                    size: "40px",
                    className: "main-page-pagination-arrow-left",
                  }}
                >
                  <BsArrowRightShort />
                </IconContext.Provider>
              </button>
            )}

            <div className="main-page-list-content-container">
              {isLoading && <ContentSkeleton cards={9} />}
              {currentComponents.map((component, i) => {
                return (
                  <div>
                    <ComponentCard
                      componentId={component.id}
                      key={component.id}
                      // loadRight={loadRight}
                      // loadLeft={loadLeft}
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
