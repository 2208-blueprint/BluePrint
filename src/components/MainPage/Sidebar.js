import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import updateAchievements from "../achievements/achievementListener";

function Sidebar() {
  const navigate = useNavigate();
  const [searchBarInput, setSearchBarInput] = useState("");

  const handleSearch = () => {
    if (searchBarInput === "") {
      return;
    }
    let keywords = searchBarInput.split(" ").join("+");
    setSearchBarInput("");
    navigate(`/components/search/${keywords}`);
  };
  //get current user and pass it into update to listen for achievements
  const currentUser = useSelector((state) => state.singleUser);
  useEffect(() => {
    updateAchievements(currentUser);
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
