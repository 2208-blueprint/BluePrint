import React from "react";
import ContentSkeleton from "./ContentSkeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ComponentCard from "./ComponentCard";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

function CategoryComponent({ showScroll, width }) {
  const [components, setComponents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [title, setTitle] = React.useState(true);
  const [length, setLength] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [componentsPerPage, setComponentsPerPage] = React.useState(8);
  const [test, setTest] = React.useState(true);
  const { type } = useParams();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  React.useEffect(() => {
    if (width > 1300) setComponentsPerPage(8);
    else setComponentsPerPage(4);
  }, [width]);
  React.useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  React.useEffect(() => {
    async function getComponents() {
      console.log(type);
      const { data } = await axios.get(`/api/components/category/${type}`);
      console.log(data);
      setComponents(data);
      setLength(data.length);
      setTitle(type);
      setIsLoading(false);
    }
    getComponents();
  }, [type]);

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
  console.log(totalPages);

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
    setComponents(oldArray);
    setTest(!test);
  }

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
          <div className="search-result-search-term">
            {title === "misc" ||
            title === "mobile" ||
            title === "react" ||
            title === "html" ||
            title === "css" ||
            title === "less"
              ? title
              : `${title}s`}
            <div className="search-result-search-term-number">{`${length} ${
              length === 1 ? "match" : "matches"
            }`}</div>
          </div>
          <div className="mainPage-sort-container">
            <p>Sort By:</p>
            <select onChange={sortHandler}>
              <option value=""></option>
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

            {currentPage >= totalPages ? null : (
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
              {currentComponents?.map((component, i) => {
                return (
                  <ComponentCard
                    componentId={component?.id}
                    key={component.id}
                  />
                );
              })}
              {components.length === 0 ? (
                <div className="search-result-search-term-no-results">
                  {" "}
                  No Results
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryComponent;
