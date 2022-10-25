import React, { useEffect } from "react";
import Axios from "axios";
import {
  BsPeople,
  BsBookmarkStar,
  BsHeartFill,
  BsCardChecklist,
  BsPencilFill,
} from "react-icons/bs";
import { GoInbox } from "react-icons/go";
import { FaMapMarkerAlt, FaRegEdit } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdPeopleOutline, MdOutlineMail, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AchievementListDisplay from "../achievements/AchievementListDisplay";
import ComponentCardProfile from "./ComponentCardProfile";

import { IconContext } from "react-icons";
import {
  BsQuestionCircleFill,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";

function ProfilePage({ showScroll, width }) {
  const [user, setUser] = React.useState();
  const [savedComponents, setSavedComponents] = React.useState([]);
  const [ownedComponents, setOwnedComponents] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [allFollowing, setAllFollowing] = React.useState([]);
  const [rank, setRank] = React.useState("");
  const [rankColor, setRankColor] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [img, setImg] = React.useState("");
  const [achievementTotal, setAchievementTotal] = React.useState(0);
  const [toggle, setToggle] = React.useState(false);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [componentsPerPage, setComponentsPerPage] = React.useState(6);
  const [sortedComponents, setSorted] = React.useState([]);

  const navigate = useNavigate();
  const toastPopup = (msg) => {
    toast.dark(msg, { autoClose: 2000 });
  };

  const uploadNavigate = (link) => {
    navigate(link);
  };

  React.useEffect(() => {
    async function getUser() {
      try {
        const token = window.localStorage.getItem("token");
        if (token) {
          const { data } = await Axios.get("api/profile", {
            headers: {
              authorization: token,
            },
          });
          console.log(data);
          setUser(data);
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

          const followers = await Axios.get("api/users/followers");
          setFollowers(followers.data);
          const following = await Axios.get("api/users/following");
          setAllFollowing(following.data);

          const savedComponents = data.components
            .filter((component) => !component.user_component.isAuthor)
            .filter((component) => component.user_component.isSaved);
          const owned = data.components.filter(
            (component) => component.user_component.isAuthor
          );
          setOwnedComponents(owned);
          setSavedComponents(savedComponents);
          setImg(data.img);
        } else {
          navigate("/login");
          toastPopup("🖥️ Login to view your profile");
        }
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, []);

  async function handleImg() {
    let imageToSend;
    if (img === "") {
      imageToSend =
        "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
    } else {
      imageToSend = img;
    }
    await Axios.put(
      `/api/users/${user.id}`,
      {
        img: imageToSend,
      },
      {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      }
    );
    window.location.reload(false);
  }
  useEffect(() => {
    if (width > 1300) setComponentsPerPage(4);
    if (width < 1300) setComponentsPerPage(2);
  }, [width]);
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

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let count = 0;
    if (user?.wasFirst) count++;
    if (user?.hadTopComponent) count++;
    if (user?.newUserUnlocked) count++;
    if (user?.twoFavoriteUnlocked) count++;
    if (user?.tenFavoriteUnlocked) count++;
    if (user?.twentyFiveFavoriteUnlocked) count++;
    if (user?.fiftyFavoriteUnlocked) count++;
    if (user?.twoSaveUnlocked) count++;
    if (user?.tenSaveUnlocked) count++;
    if (user?.twentyFiveSaveUnlocked) count++;
    if (user?.fiftySaveUnlocked) count++;
    if (user?.twoFollowsUnlocked) count++;
    if (user?.tenFollowsUnlocked) count++;
    if (user?.twentyFiveFollowsUnlocked) count++;
    if (user?.fiftyFollowsUnlocked) count++;
    setAchievementTotal(count);
  }, [user]);

  const lastPostIndex = currentPage * componentsPerPage;
  const firstPostIndex = lastPostIndex - componentsPerPage;
  const currentComponents = savedComponents.slice(
    firstPostIndex,
    lastPostIndex
  );
  const totalPages = Math.ceil(savedComponents.length / componentsPerPage);
  const totalOwnedPages = Math.ceil(ownedComponents.length / componentsPerPage);

  return (
    <div className="profile-wrapper">
      <div className="profile-sidebar">
        {show ? (
          <div className="profile-edit-url">
            <div className="profile-x-button" onClick={() => setShow(!show)}>
              <MdClose size="20px" />
            </div>
            <p>Edit your profile picture URL:</p>
            <input value={img} onChange={(e) => setImg(e.target.value)}></input>
            <button onClick={handleImg}>Submit</button>
          </div>
        ) : (
          <></>
        )}
        <div
          onClick={() => setShow(!show)}
          className="profile-edit-image-button"
        >
          <FaRegEdit size="35px" />
        </div>
        <div className="profile-picture">
          <img src={user?.img} alt="" />
        </div>
        {/* <div
          className={
            user?.highestRank && user?.wasFirst
              ? "profile-picture-crown"
              : "profile-picture-crown-invis"
          }
        >
          <FaCrown size="35px" />
        </div> */}
        <div className="profile-category-link-container">
          <div className="profile-category-link">
            <div className="profile-category-link-name">{user?.firstName}</div>
            <div className="profile-rank-icon">
              <GiGearHammer
                style={{
                  marginLeft: "8px",
                }}
                size="20px"
                color={rankColor}
              />
            </div>
          </div>
          <div className="profile-category-link username">
            <small>
              {user?.username} <span className="rankDivide">|</span> {rank}{" "}
            </small>
          </div>
          <div className="profile-info-sandwich">
            <div className="profile-info-sandwich-left">
              <div className="profile-user-name">
                <small>
                  {" "}
                  <span className="profile-icon-buffer">
                    <BsPencilFill color={"#47B5FF"} />{" "}
                  </span>
                  {`${user?.firstName} ${user?.lastName}`}{" "}
                </small>
              </div>
              <div>
                <small>
                  <span className="profile-icon-buffer">
                    <MdOutlineMail color={"#47B5FF"} />
                  </span>
                  {user?.email}
                </small>
              </div>
              <div>
                <small>
                  <span className="profile-icon-buffer">
                    {" "}
                    <BsCardChecklist color={"#47B5FF"} />
                  </span>
                  Joined: {user?.createdAt.slice(0, 10)}
                </small>
              </div>
              <div className="profile-country-span">
                <small>
                  <span className="profile-icon-buffer">
                    {" "}
                    <FaMapMarkerAlt color={"#47B5FF"} />
                  </span>
                  {user?.country}
                </small>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="profile-new-component-button-container">
            <button
              className="profile-new-component-button"
              onClick={() => navigate("/profile/create")}
            >
              Create New Component
            </button>
          </div>
        </div>
      </div>
      <div className="profile-main-content-container">
        <div className="profile-user-extras-container">
          <div className="profile-user-extras-left">
            <div className="profile-user-flex">
              <div className="profile-user-extras-leftside">
                <div className="profile-toggle-main-heading">
                  {toggle ? (
                    <>
                      <h1 className="profile-toggle-header">My Uploads</h1>
                      <div
                        className="profile-toggle-button"
                        onClick={() => setToggle(!toggle)}
                      >
                        Show Saved
                      </div>
                    </>
                  ) : (
                    <>
                      <h1 className="profile-toggle-header">My Saved</h1>
                      <div
                        className="profile-toggle-button"
                        onClick={() => setToggle(!toggle)}
                      >
                        Show Uploaded
                      </div>
                    </>
                  )}
                </div>
                <div className="profilePage-button-container">
                  {toggle || currentPage === 1 ? null : (
                    <button
                      onClick={previousPage}
                      className="prof-page-prev-button"
                    >
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

                  {toggle || currentPage === totalPages ? null : (
                    <button
                      onClick={nextPage}
                      className="prof-page-next-button"
                    >
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
                  <div className="profile-user-uploads">
                    {toggle ? (
                      ownedComponents.length ? (
                        ownedComponents
                          .slice(firstPostIndex, lastPostIndex)
                          .map((component, i) => {
                            return (
                              <ComponentCardProfile
                                component={component}
                                key={component.id}
                              />
                            );
                          })
                      ) : (
                        <div className="warning">
                          <div className="prof-image-wrap">
                            <GoInbox size="100px" />
                          </div>
                          <div className="prof-warning-display">
                            Uploads will display here
                          </div>
                        </div>
                      )
                    ) : savedComponents?.length ? (
                      currentComponents?.map((component, i) => {
                        if (!component.user_component.isAuthor) {
                          return (
                            <ComponentCardProfile
                              component={component}
                              key={component.id}
                            />
                          );
                        }
                      })
                    ) : (
                      <div className="warning">
                        <div className="prof-image-wrap">
                          <GoInbox size="100px" />
                        </div>{" "}
                        <div className="prof-warning-display">
                          Saved components will display here
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="profile-user-extras-rightside">
                <h1 className="profile-toggle-header" id="user-engagement">
                  User Engagement
                </h1>
                <div id="profile-achievement-display">
                  <AchievementListDisplay
                    achievementTotal={achievementTotal}
                    user={user}
                  />
                  <div className="pointInfo">
                    <div>
                      <div>
                        Current Rank: <span>{rank}</span>
                      </div>
                      <div>
                        Current Points: <span>{user?.currentPoints}</span>
                      </div>
                      <div>
                        Highest Points:<span> {user?.highestRank}</span>
                      </div>
                      <div>
                        {rank === "Chief" ? null : "Points to Next Rank: "}{" "}
                        <span>
                          {rank === "Apprentice"
                            ? 100 - user.currentPoints
                            : rank === "Artisan"
                            ? 200 - user.currentPoints
                            : rank === "Architect"
                            ? 500 - user.currentPoints
                            : rank === "Engineer"
                            ? 1000 - user.currentPoints
                            : null}
                        </span>
                      </div>
                    </div>
                    <div className="profile-info-sandwich-right">
                      <div className="profile-category-link followers">
                        <BsPeople size="20px" color="#34b233" /> Followers:{""}
                        <span>{followers ? followers.length : "0"}</span>{" "}
                      </div>
                      <div className="profile-category-link following">
                        <MdPeopleOutline
                          size="20px"
                          color={"rgb(235, 220, 158) "}
                        />{" "}
                        Following:{" "}
                        <span> {allFollowing ? allFollowing.length : "0"}</span>
                      </div>
                      <div className="profile-category-link favorited">
                        <BsBookmarkStar
                          size="20px"
                          color={"rgb(202, 96, 114) "}
                        />{" "}
                        Favorited :
                        <span>
                          {savedComponents ? savedComponents.length : "0"}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
