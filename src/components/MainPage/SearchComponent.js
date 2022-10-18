import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContentSkeleton from "./ContentSkeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ComponentCard from "./ComponentCard";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  BsQuestionCircleFill,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";

function SearchComponent() {
  const [components, setComponents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [componentsPerPage, setComponentsPerPage] = React.useState(8);
  let { keywords } = useParams();
  React.useEffect(() => {
    async function getComponents() {
      const { data } = await axios.get("/api/components");

      setComponents(data);
      setIsLoading(false);
    }
    getComponents();
    console.log("components", components);
  }, []);
  //reset currentPage after every search
  React.useEffect(() => {
    setCurrentPage(1);
  }, [keywords]);

  const cache = {};
  const searchResult = [];
  keywords = keywords.split("+");
  const ignoreWords = ["the", "and", "of", "in", "a"];
  const filteredKeywords = [];
  keywords.forEach((word) => {
    if (!ignoreWords.includes(word)) filteredKeywords.push(word);
  });
  components.forEach((component) => {
    console.log(component, "component");
    for (let i = 0; i < filteredKeywords.length; i++) {
      const componentAuthor = component.users?.find(
        (user) => user["user_component"].isAuthor
      );
      let currentWord = filteredKeywords[i];

      if (
        component.name?.toLowerCase().indexOf(currentWord.toLowerCase()) >= 0 ||
        component.description
          ?.toLowerCase()
          .indexOf(currentWord.toLowerCase()) >= 0 ||
        component.type?.toLowerCase().indexOf(currentWord.toLowerCase()) >= 0 ||
        component.framework?.toLowerCase().indexOf(currentWord.toLowerCase()) >=
          0 ||
        componentAuthor?.username
          ?.toLowerCase()
          .indexOf(currentWord.toLowerCase()) >= 0 ||
        component.stylingFramework
          ?.toLowerCase()
          .indexOf(currentWord.toLowerCase()) >= 0 ||
        component.tags?.toLowerCase().indexOf(currentWord.toLowerCase()) >= 0
      ) {
        if (cache[component.name]) {
          continue;
        }
        cache[component.name] = true;
        searchResult.push(component);
      } else break;
    }
  });

  const lastPostIndex = currentPage * componentsPerPage;
  const firstPostIndex = lastPostIndex - componentsPerPage;
  const currentComponents = searchResult.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(searchResult.length / componentsPerPage);

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
  console.log(currentPage);
  return (
    <div className="main-page-main-container">
      <div className="main-page-wrapper">
        <div className="main-page-category-container">
          {isLoading && <Skeleton containerClassName="skeleton-container" />}
          <Sidebar />
        </div>
        <div className="main-page-content-container">
          <div className="search-result-search-term">
            {`${keywords.join(" ")}`}
            <div className="search-result-search-term-number">{`${
              searchResult.length
            } ${searchResult.length === 1 ? "match" : "matches"}`}</div>
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
              {currentComponents.map((component, i) => {
                return (
                  <ComponentCard
                    componentId={component?.id}
                    key={component.id}
                  />
                );
              })}
              {searchResult.length === 0 ? (
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

export default SearchComponent;
