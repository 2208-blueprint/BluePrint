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

function SearchComponent() {
  const [components, setComponents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function getComponents() {
      const { data } = await axios.get("/api/components");

      setComponents(data);
      setIsLoading(false);
    }
    getComponents();
    console.log("components", components);
  }, []);
  const cache = {};
  const searchResult = [];
  let { keywords } = useParams();
  keywords = keywords.split("+");
  components.forEach((component) => {
    console.log(component, "component");
    for (let i = 0; i < keywords.length; i++) {
      const componentAuthor = component.users?.find(
        (user) => user["user_component"].isAuthor
      );
      let currentWord = keywords[i];

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
        component.tags?.indexOf(currentWord.toLowerCase()) >= 0
      ) {
        if (cache[component.name]) {
          continue;
        }
        cache[component.name] = true;
        searchResult.push(component);
      }
    }
  });

  return (
    <div className="main-page-main-container">
      <ToastContainer />
      <div className="main-page-wrapper">
        <div className="main-page-category-container">
          {isLoading && <Skeleton containerClassName="skeleton-container" />}
          <Sidebar />
        </div>
        <div className="main-page-content-container">
          <div className="main-page-list-content-container">
            {isLoading && <ContentSkeleton cards={9} />}
            {searchResult.map((component, i) => {
              return (
                <ComponentCard componentId={component?.id} key={component.id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
