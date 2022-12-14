import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import UserPageComponentCard from "./UserPageComponentCard";
import ComponentCard from "../MainPage/ComponentCard";
import axios from "axios";
import {
  BsPersonPlusFill,
  BsPersonCheckFill,
  BsPeople,
  BsSearch,
  BsBookmarkStar,
  BsHeartFill,
} from "react-icons/bs";
import { IconContext } from "react-icons";
import { GiGearHammer } from "react-icons/gi";
import { FaCoins, FaHammer, FaCrown } from "react-icons/fa";
import { toast } from "react-toastify";

//This is the full "profile page" of a user. The logged-in user can visit this page to see components made by this
//user, as well as follow the user to see more content from them.

function UserPage() {
  let navigate = useNavigate();
  const [curUser, setCurUser] = useState("");
  const [rank, setRank] = useState("");
  const [rankColor, setRankColor] = useState("");
  const [points, setPoints] = useState(0);
  // const [totalFavs, setTotalFavs] = useState(0);
  // const [totalSaves, setTotalSaves] = useState(0);
  const [searchBarInput, setSearchBarInput] = useState("");
  const [componentsArray, setComponentsArray] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [type, setType] = useState("");
  const [followed, setFollowed] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followingArray, setFollowingArray] = useState([]);
  // const [author, setAuthor] = useState({username: '', id:0})
  const [hideFollow, setHideFollow] = useState(true);

  const toastSuccess = (msg) => toast.dark(msg, { autoClose: 2000 });
  const toastPopup = (msg) => toast.dark(msg, { autoClose: 2000 });

  //Get current user number from URL path
  let curUserNum = window.location.pathname;
  curUserNum = curUserNum.slice(7, curUserNum.length);

  React.useEffect(() => {
    async function getCurrentUser() {
      try {
        if (curUserNum) {
          const { data } = await Axios.get(`/api/users/${curUserNum}`);
          setCurUser(data);

          if (data.highestRank >= 1000) {
            setRank("Chief");
            setRankColor("#FDFDBE");
          } else if (data.highestRank >= 500) {
            setRank("Engineer");
            setRankColor("#82EEE8");
          } else if (data.highestRank >= 200) {
            setRank("Architect");
            setRankColor("#FFD700");
          } else if (data.highestRank >= 100) {
            setRank("Artisan");
            setRankColor("#C0C0C0");
          } else {
            setRank("Apprentice");
            setRankColor("#CD7F32");
          }
          setFollowingArray(data.followers);
          setPoints(data.currentPoints);
          setComponentsArray(data.components);
          setFiltered(data.components);
        }
      } catch (e) {
        console.error(e);
      }
    }
    getCurrentUser();
  }, []);

  // React.useEffect(() => {
  //     async function getComponentSavesAndFavs() {
  //         try {

  //         } catch(e) {
  //             console.error(e)
  //         }
  //     }
  //     getComponentSavesAndFavs();
  // }, [componentsArray])

  // React.useEffect(() => {
  //     async function getUserBlueprintPoints() {
  //         try {

  //         } catch(e) {
  //             console.error(e)
  //         }
  //     }
  //     getUserBlueprintPoints();
  // }, [])

  function handleMessageMeButton(evt) {
    evt.preventDefault();
  }

  const handleSearch = () => {
    if (searchBarInput === "") {
      setFiltered(componentsArray);
      return;
    }
    const filterArray = componentsArray.filter((component) => {
      return component.name.includes(searchBarInput);
    });
    setFiltered(filterArray);
  };

  React.useEffect(() => {
    const handleSelectFilter = () => {
      if (type === "all") {
        setFiltered(componentsArray);
        return;
      }
      const filterArray = componentsArray.filter((component) => {
        return component.type.includes(type);
      });
      setFiltered(filterArray);
      console.log("curUser: ", curUser);
    };
    handleSelectFilter();
  }, [type]);

  //Check if the user is also the logged profile, or not even logged in
  React.useEffect(() => {
    try {
      const handleCheckAuthor = async () => {
        const curAuthor = await axios.get("/api/profile", {
          headers: {
            authorization: window.localStorage.getItem("token"),
          },
        });
        if (
          curUser.id === curAuthor.data.id ||
          curAuthor.data.id === undefined
        ) {
          setHideFollow(true);
        } else {
          setHideFollow(false);
        }
      };
      handleCheckAuthor();
    } catch (err) {}
  }, [curUser]);

  React.useEffect(() => {
    const handleCheckFollowing = async () => {
      const curAuthor = await axios.get("/api/profile", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      });
      let followArray = curUser.followers;
      for (let i = 0; i < followArray?.length; i++) {
        let curFollower = followingArray[i];
        if (curAuthor.data.id === curFollower.id) {
          setFollowed(true);
        }
      }
    };
    handleCheckFollowing();
  }, [curUser]);

  async function followHandler(e) {
    try {
      e.preventDefault();
      if (window.localStorage.getItem("token")) {
        if (!followed) {
          await axios.put(
            `/api/users/follow/${curUserNum}`,
            {},
            {
              headers: {
                authorization: window.localStorage.getItem("token"),
              },
            }
          );
          toastPopup(`Now following ${curUser.username}`);
        } else {
          await axios.put(
            `/api/users/unfollow/${curUserNum}`,
            {},
            {
              headers: {
                authorization: window.localStorage.getItem("token"),
              },
            }
          );
          toastPopup(`Unfollowed ${curUser.username}`);
        }
        setFollowed(!followed);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="single-user-page-main-container">
        <div className="single-user-page-title-container">
          <div className="single-user-page-user-pic">
            <img
              className="single-user-page-user-img"
              src={curUser?.img}
              alt="user_pic.png"
            />
          </div>

          <div className="single-user-page-user-name-rank-container">
            <div className="single-user-page-user-name">
              {curUser?.username}
            </div>
            <div className="single-user-page-rank-achievements">
              <GiGearHammer
                style={{
                  marginRight: "4px",
                }}
                size="20px"
                color={rankColor}
              />
              {rank}
            </div>
            <div className="single-user-page-follow-container">
              {hideFollow ? null : followed ? (
                <div onClick={followHandler} id="single-user-page-follow">
                  <IconContext.Provider value={{ size: "40px" }}>
                    <BsPersonCheckFill />
                  </IconContext.Provider>
                  <span className="single-user-page-follow-tooltip"></span>
                </div>
              ) : (
                <div onClick={followHandler} id="single-user-page-follow">
                  <IconContext.Provider value={{ size: "40px" }}>
                    <BsPersonPlusFill />
                  </IconContext.Provider>
                  <span className="single-user-page-follow-tooltip"></span>
                </div>
              )}
            </div>
          </div>
          <div className="single-user-page-user-stats-container">
            <div className="single-user-page-components-made-wrapper">
              <FaHammer className="single-user-page-components-made" />
              <span className="single-user-page-points">
                {curUser?.components?.length}
              </span>
              <span className="single-user-page-tooltip">
                {" "}
                Components made{" "}
              </span>
            </div>
            <div className="single-user-page-followers-wrapper">
              <BsPeople className="single-user-page-followers" />
              <span className="single-user-page-points">
                {curUser?.followers?.length}
              </span>
              <span className="single-user-page-tooltip"> Followers </span>
            </div>
            {/* <span>Total Favorites:</span>
                    <span>Total Saves:</span> */}
            <div className="single-user-page-bluepoints-wrapper">
              <FaCoins className="single-user-page-bluepoints" />
              <span className="single-user-page-points">{points}</span>
              <div className="single-user-page-tooltip"> BluePrint Points </div>
            </div>
          </div>
        </div>
        <div className="single-user-page-search-container">
          <div className="single-user-page-searchbar">
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
          <div className="single-user-page-filter">
            Filter by type:
            <select
              className="single-user-page-filter-dropdown"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="all">All</option>
              <option value="animation">animation</option>
              <option value="button">button</option>
              <option value="drop-down">drop-down</option>
              <option value="footer">footer</option>
              <option value="form">form</option>
              <option value="graphic">graphic</option>
              <option value="icon">icon</option>
              <option value="info-card">info-card</option>
              <option value="mobile">mobile</option>
              <option value="navbar">navbar</option>
              <option value="slider">slider</option>
              <option value="misc">misc</option>
            </select>
          </div>
        </div>
        <div className="single-user-page-component-list-container">
          {filtered?.map((component, i) => {
            if (component.user_component.isAuthor) {
              return (
                <div className="single-user-page-single-component">
                  <ComponentCard componentId={component.id} key={i} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default UserPage;
