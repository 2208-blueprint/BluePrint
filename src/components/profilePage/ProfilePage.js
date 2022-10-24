import React, { useEffect } from "react";
import Axios from "axios";
import {
  BsPeople,
  BsBookmarkStar,
  BsHeartFill,
  BsCardChecklist,
  BsPencilFill,
} from "react-icons/bs";
import { FaMapMarkerAlt, FaRegEdit } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdPeopleOutline, MdOutlineMail, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AchievementDisplay from "../achievements/AchievementDisplay";
import {
  newUser,
  twoForOne,
  tenForOne,
  twentyFiveForOne,
  fiftyForOne,
  twoSaves,
  tenSaves,
  twentyFiveSaves,
  fiftySaves,
  twoFollows,
  tenFollows,
  twentyFiveFollows,
  fiftyFollows,
  rankedFirst,
  topComponent,
} from "../achievements/achievementListener";

function ProfilePage() {
  const [user, setUser] = React.useState();
  const [savedComponents, setSavedComponents] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [allFollowing, setAllFollowing] = React.useState([]);
  const [rank, setRank] = React.useState("");
  const [rankColor, setRankColor] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [img, setImg] = React.useState("");
  const [achievementTotal, setAchievementTotal] = React.useState(0);

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

          const savedComponents = data.components.filter(
            (component) => component.user_component.isSaved
          );

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
        <div
          className={
            user?.highestRank && user?.wasFirst
              ? "profile-picture-crown"
              : "profile-picture-crown-invis"
          }
        >
          <FaCrown size="35px" />
        </div>
        <div className="profile-category-link-container">
          <div className="profile-category-link">
            <b>{user?.firstName}</b>
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
              {user?.username} -- {rank} {`(peak: ${user?.highestRank} points)`}
            </small>
          </div>
          <div className="profile-category-link location">
            <FaMapMarkerAlt />
            <small>{user?.country}</small>
          </div>
          <div className="profile-category-link followers">
            <small>
              <BsPeople /> {followers ? followers.length : "0"} Followers
            </small>
          </div>
          <div className="profile-category-link following">
            <small>
              <MdPeopleOutline /> {allFollowing ? allFollowing.length : "0"}{" "}
              Following
            </small>
          </div>
          <div className="profile-category-link favorited">
            <small>
              <BsBookmarkStar />{" "}
              {savedComponents ? savedComponents.length : "0"} Favorited
            </small>
          </div>
          <hr></hr>
          <div className="profile-new-component-button-container">
            <button
              className="profile-new-component-button"
              onClick={() => navigate("/profile/create")}
            >
              Create new component
            </button>
          </div>
        </div>
        <div className="profile-achievement-dropDown">
          <div className="achievement-toggle-container">
            <div className="achievementToggle">
              Achievements {`(${achievementTotal}/15)`}
            </div>
            <div className="profile-achievement-list-collapse">
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Welcome to Blueprint!"
                  achievementDesc="Join our awesome community of developers."
                  pointVal={5}
                  achievementIcon={newUser}
                  earned={true}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Two-for-One"
                  achievementDesc="Get 2 favorites on one component."
                  pointVal={20}
                  achievementIcon={twoForOne}
                  earned={user?.twoFavoriteUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Ten-for-One"
                  achievementDesc="Get 10 favorites on one component."
                  pointVal={50}
                  achievementIcon={tenForOne}
                  earned={user?.tenFavoriteUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Twenty-Five-for-One"
                  achievementDesc="Get 25 favorites on one component."
                  pointVal={200}
                  achievementIcon={twentyFiveForOne}
                  earned={user?.twentyFiveFavoriteUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Fifty-for-One"
                  achievementDesc="Get 50 favorites on one component."
                  pointVal={300}
                  achievementIcon={fiftyForOne}
                  earned={user?.fiftyFavoriteUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Two Saves"
                  achievementDesc="Get 2 saves on one component."
                  pointVal={20}
                  achievementIcon={twoSaves}
                  earned={user?.twoSaveUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Ten Saves"
                  achievementDesc="Get 10 saves on one component."
                  pointVal={50}
                  achievementIcon={tenSaves}
                  earned={user?.tenSaveUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Twenty-Five Saves"
                  achievementDesc="Get 25 saves on one component."
                  pointVal={200}
                  achievementIcon={twentyFiveSaves}
                  earned={user?.twentyFiveSaveUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Twenty-Five Saves"
                  achievementDesc="Get 25 saves on one component."
                  pointVal={200}
                  achievementIcon={fiftySaves}
                  earned={user?.fiftySaveUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="From Humble Beginnings"
                  achievementDesc="Congratulations! You've had 2 users follow you."
                  pointVal={20}
                  achievementIcon={twoFollows}
                  earned={user?.twoFollowsUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Well On Your Way"
                  achievementDesc="10 users are looking forward to your next post!"
                  pointVal={50}
                  achievementIcon={tenFollows}
                  earned={user?.tenFollowsUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Content Creator"
                  achievementDesc="'Don't forget to like, comment, and subscribe' (25 followers)"
                  pointVal={200}
                  achievementIcon={twentyFiveFollows}
                  earned={user?.twentyFiveFollowsUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="BluePoint Celebrity"
                  achievementDesc="50 users are furiously copy-pasting your code into their projects. We at BluePrint thank you for your charitable contributions!"
                  pointVal={300}
                  achievementIcon={fiftyFollows}
                  earned={user?.fiftyFollowsUnlocked}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="King of the Hill"
                  achievementDesc="Have your component rank first on the site!"
                  pointVal={100}
                  achievementIcon={topComponent}
                  earned={user?.hadTopComponent}
                />
              </div>{" "}
              <div className="profile-achievement-list-item">
                <AchievementDisplay
                  achievementName="Nice going, Chief."
                  achievementDesc="Rank first on the site!"
                  pointVal={100}
                  achievementIcon={rankedFirst}
                  earned={user?.wasFirst}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-main-content-container">
        <div className="profile-user-extras-container">
          <div className="profile-user-info-container">
            <div className="profile-user-info-left">
              <h1>My info</h1>
              <div className="profile-user-name">
                <BsPencilFill />
                {`${user?.firstName} ${user?.lastName}`}{" "}
              </div>
              <div className="profile-user-email">
                <MdOutlineMail />
                {user?.email}
              </div>
              <div className="profile-user-member-since">
                <BsCardChecklist />
                <small>Joined: {user?.createdAt.slice(0, 10)}</small>
              </div>
              <div className="profile-country-span">
                <FaMapMarkerAlt />
                <small>{user?.country}</small>
              </div>
            </div>
            <hr></hr>
            <div className="profile-user-info-right">
              <h1>Achievements</h1>
              <div className="profile-achievements rank">Rank: {rank}</div>
              <div className="profile-achievements points">
                Points: {user?.highestRank}
              </div>
              <div className="profile-achievements badges">
                Badges:{" "}
                <GiGearHammer
                  style={{
                    marginLeft: "8px",
                  }}
                  size="20px"
                  color={rankColor}
                />
              </div>
            </div>
          </div>
          <div className="profile-user-extras-left">
            <h1>My uploads</h1>
            <div className="profile-user-uploads">
              {user?.components.length
                ? user?.components.map((component, i) => {
                    if (component.user_component.isAuthor) {
                      return (
                        <div
                          key={i}
                          className="profile-user-single-upload"
                          onClick={() =>
                            uploadNavigate(`/components/${component.id}`)
                          }
                        >
                          <div className="user-upload-image">
                            <img src={component.img} alt="" />
                          </div>
                          <p>{component.name}</p>
                          <div className="single-user-upload-frameworks">
                            <div className="single-user-upload-framework">
                              {component.framework}
                            </div>
                            <div className="single-user-upload-framework">
                              {component.stylingFramework}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })
                : "You have not uploaded any components!"}
            </div>
          </div>
        </div>
        <div className="profile-user-extras-right">
          <h1>My saved components</h1>
          <div className="profile-user-saved-components">
            {savedComponents?.length
              ? savedComponents?.map((component, i) => {
                  if (!component.user_component.isAuthor) {
                    return (
                      <div
                        key={"saved" + i}
                        className="profile-user-single-saved"
                        onClick={() =>
                          uploadNavigate(`/components/${component.id}`)
                        }
                      >
                        <div className="user-saved-image">
                          <img src={component.img} alt="" />
                        </div>
                        <p>{component.name}</p>
                        <div className="single-user-saved-frameworks">
                          <div className="single-user-saved-framework">
                            {component.framework}
                          </div>
                          <div className="single-user-saved-framework">
                            {component.stylingFramework}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              : "You have not saved any components!"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
