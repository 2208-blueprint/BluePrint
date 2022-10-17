import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

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
          onClick={() => navigate(`/components/framework/react`)}
        >
          REACT
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/framework/${"html"}`)}
        >
          HTML
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/framework/css`)}
        >
          CSS
        </div>
        <div
          className="side-bar-container-category"
          onClick={() => navigate(`/components/framework/less`)}
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
