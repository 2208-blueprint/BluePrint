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

function FrameworkComponent() {
  const [components, setComponents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [length, setLength] = React.useState(0);
  const { framework } = useParams();

  React.useEffect(() => {
    async function getComponents() {
      const { data } = await axios.get(
        `/api/components/framework/${framework}`
      );
      console.log(data);
      setComponents(data);
      setIsLoading(false);
      setLength(data.length);
    }
    getComponents();
  }, [framework]);

  return (
    <div className="main-page-main-container">
      <ToastContainer />
      <div className="main-page-wrapper">
        <div className="main-page-category-container">
          {isLoading && <Skeleton containerClassName="skeleton-container" />}
          <Sidebar />
        </div>
        <div className="main-page-content-container">
          <div className="search-result-search-term">
            {framework}
            <div className="search-result-search-term-number">
              {`${length} ${length === 1 ? "match" : "matches"}`}
            </div>
          </div>

          <div className="main-page-list-content-container">
            {isLoading && <ContentSkeleton cards={9} />}
            {components?.map((component, i) => {
              return (
                <ComponentCard componentId={component?.id} key={component.id} />
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
  );
}

export default FrameworkComponent;
