import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import axios from "axios";
import AchievementMessage from "../achievements/AchievementMessage";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const test = <BsArrowLeftShort size="40px" />;
function Sidebar() {
  const navigate = useNavigate();
  const [searchBarInput, setSearchBarInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchBarInput === "") {
      return;
    }
    let keywords = searchBarInput.split(" ").join("+");
    setSearchBarInput("");
    navigate(`/components/search/${keywords}`);
  };
  const currentUser = useSelector((state) => state.singleUser);
  useEffect(() => {
    const updateAchievements = async () => {
      if (
        currentUser.twoFavoriteUnlocked &&
        !currentUser.twoFavoriteDisplayed
      ) {
        // await axios.put("/api/admin/awardAchievement", {
        //   twoFavoriteDisplayed: true,
        // });
        console.log("running");
        setTimeout(() => {
          toast.dark(
            <AchievementMessage
              achievementName="Two-for-One"
              achievementDesc="Get two favorites on one component."
              pointVal={50}
              achievementIcon={test}
            />,
            {
              toastId: "success1",
              transition: Zoom,
              autoClose: 4000,
              hideProgressBar: false,
              style: {
                backgroundColor: "rgb(53, 53, 111)",
                margin: 0,
              },
              bodyClassName: "toast-body",
              progressClassName: "toast-progress",
            }
          );
        }, 1000);
      }
    };
    updateAchievements();
  }, [currentUser]);
  return (
    <div className="side-bar-container-main">
      <div className="side-bar-container-searchbar-container">
        <input
          type="text"
          className="side-bar-container-searchbar"
          placeholder="SEARCH COMPONENTS"
          onChange={(e) => {
            setSearchBarInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleSearch();
            }
          }}
        />
        <div className="side-bar-search-button" onClick={handleSearch}>
          {" "}
          <IconContext.Provider value={{ size: "20px" }}>
            <BsSearch />
          </IconContext.Provider>
        </div>
      </div>
      <div className="side-bar-container-categories">
        <div className="side-bar-container-category-heading">CATEGORIES</div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/animation`)}
        >
          ANIMATION
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/button`)}
        >
          BUTTONS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/drop-down`)}
        >
          DROP-DOWNS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/footer`)}
        >
          FOOTERS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/form`)}
        >
          FORMS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/graphic`)}
        >
          GRAPHICS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/icon`)}
        >
          ICONS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/info-card`)}
        >
          INFO-CARDS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/mobile`)}
        >
          MOBILE-FRIENDLY
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/navbar`)}
        >
          NAVBARS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/slider`)}
        >
          SLIDERS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/misc`)}
        >
          MISC
        </div>
        <div
          className="side-bar-container-category-heading"
          id="side-bar-framework"
        >
          FRAMEWORKS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/react`)}
        >
          REACT
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/${"html"}`)}
        >
          HTML
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/css`)}
        >
          CSS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/category/less`)}
        >
          LESS
        </div>
        <div
          className="side-bar-container-category-heading"
          id="side-bar-resources"
        >
          RESOURCES
        </div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">API LINK HERE</div>
        <div className="side-bar-container-category">LAST LINK</div>
      </div>
    </div>
  );
}

export default Sidebar;
