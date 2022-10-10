import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cog from "../images/cog3.png";
import { DropDownItems } from "../";
import axios from "axios";
import { useSelector } from "react-redux";

function Navbar({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const [searchBarInput, setSearchBarInput] = React.useState("");
  const [dropDown, setDropDown] = React.useState(false);

  const login = useSelector((state) => state.value);

  React.useEffect(() => {
    const loginCheck = async () => {
      const token = window.localStorage.getItem("token");

      if (token) {
        const { data } = await axios.get("/api/auth", {
          headers: {
            authorization: token,
          },
        });
        if (data) {
          setLoggedIn(true);
        }
      }
    };
    loginCheck();
  }, []);

  const handleSearch = () => {
    let keywords = searchBarInput.split(" ").join("+");
    setSearchBarInput("");
    navigate(`/events/search/${keywords}`);
  };

  return (
    <>
      <nav id="navbar">
        <Link to="/" id="navbar-logo">
          {/* <img src={logo} alt="logo" /> */}
        </Link>
        <div className="navbar-links">
          <Link to="/" onClick={() => setDropDown(false)}>
            Home
          </Link>
          <Link to="/" onClick={() => setDropDown(false)}>
            Featured Components
          </Link>
          <Link to="/" onClick={() => setDropDown(false)}>
            Leaderboard
          </Link>
          <Link
            to="/users"
            onClick={() => setDropDown(false)}
          >
            All Users
          </Link>
          <Link to="/" onClick={() => setDropDown(false)}>
            (Your profile name here)
          </Link>
        </div>
        <div className="login-logout-container">
          <img
            id="settings-icon"
            src={cog}
            alt="settings"
            onClick={() => setDropDown(!dropDown)}
          />
        </div>
        {dropDown ? (
          <ul>
            <DropDownItems
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setDropDown={setDropDown}
            />
          </ul>
        ) : (
          <></>
        )}
      </nav>
      {/* <div className="navbar-searchbar-container">
        <div className="inner-searchbar-container">
          <div className="searchbar-icon"></div>
          <input
            type="text"
            placeholder="Search by location, artist, genre..."
            onChange={(e) => setSearchBarInput(e.target.value)}
            value={searchBarInput}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;