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
          placeholder="SEARCH..."
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
        <div className="side-bar-container-category">ANIMATION</div>
        <div className="side-bar-container-category">BUTTONS</div>
        <div className="side-bar-container-category">DROP DOWNS</div>
        <div className="side-bar-container-category">FOOTERS</div>
        <div className="side-bar-container-category">FORMS</div>
        <div className="side-bar-container-category">GRAPHICS</div>
        <div className="side-bar-container-category">ICONS</div>
        <div className="side-bar-container-category">INFO-CARDS</div>
        <div className="side-bar-container-category">MOBILE-FRIENDLY</div>
        <div className="side-bar-container-category">NAVBARS</div>
        <div className="side-bar-container-category">SLIDERS</div>
        <div className="side-bar-container-category">MISC</div>
        <div
          className="side-bar-container-category-heading"
          id="side-bar-framework"
        >
          FRAMEWORKS
        </div>
        <div className="side-bar-container-category">REACT</div>
        <div className="side-bar-container-category">HTML</div>
        <div className="side-bar-container-category">CSS</div>
        <div className="side-bar-container-category">LESS</div>
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
