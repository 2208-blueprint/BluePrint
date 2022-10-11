import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContentSkeleton from "./ContentSkeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ComponentCard from "./ComponentCard";

function MainPage() {
  //   const [users, setUsers] = React.useState([]);
  const [components, setComponents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  //   React.useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((users) => {
  //         setUsers(users);
  //         setIsLoading(false);
  //       });
  //   }, []);
  React.useEffect(() => {
    fetch("http://localhost:3000/api/components")
      .then((res) => res.json())
      .then((data) => {
        setComponents(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main-page-main-container">
      <ToastContainer />
      <div className="main-page-wrapper">
        <div className="main-page-category-container">
          {isLoading && <Skeleton containerClassName="skeleton-container" />}
        </div>
        <div className="main-page-content-container">
          <div className="main-page-featured-container">
            {isLoading && <Skeleton containerClassName="skeleton-container" />}
          </div>
          <div className="main-page-list-content-container">
            {isLoading && <ContentSkeleton cards={9} />}
            {components.map((component, i) => {
              return <ComponentCard componentId={component.id} key={i} />;
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
