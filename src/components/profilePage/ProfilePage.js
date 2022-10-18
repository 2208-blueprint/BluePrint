import React from "react";
import Axios from "axios";
import { BsPeople, BsBookmarkStar, BsHeartFill, BsCardChecklist, BsPencilFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { MdPeopleOutline, MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ProfilePage() {
  const [user, setUser] = React.useState();
  const [savedComponents, setSavedComponents] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [rank, setRank] = React.useState("");
  const [rankColor, setRankColor] = React.useState("");


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

          const savedComponents = data.components.filter(
            (component) => component.user_component.isSaved
          );

          setSavedComponents(savedComponents);
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
console.log(savedComponents);

  return (
    <div className="profile-wrapper">
      <div className="profile-sidebar">
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
              {user?.username} -- {rank} {`(${user?.highestRank} points)`}
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
              <MdPeopleOutline /> 0 Following
            </small>
          </div>
          <div className="profile-category-link favorited">
            <small>
              <BsBookmarkStar />{" "}
              {savedComponents ? savedComponents.length : "0"} Favorited
            </small>
          </div>
          <div className="profile-category-link likes">
            <small>
              <BsHeartFill /> 0 Likes
            </small>
          </div>
          <hr></hr>
          <div className="profile-category-link inbox">
            <p className="my-inbox">
              <MdOutlineMail />
              My Inbox
            </p>
          </div>
          <hr></hr>
          <div className="profile-new-component-button-container">
            <button className="profile-new-component-button" onClick={() => navigate('/profile/create')}>
              Create new component
            </button>
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
                <div className="profile-achievements points">Points: {user?.highestRank}</div>
                <div className="profile-achievements badges">Badges: <GiGearHammer
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
              {user?.components.map((component, i) => {
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
              })}
            </div>
          </div>
        </div>
        <div className="profile-user-extras-right">
          <h1>My favorites</h1>
          <div className="profile-user-saved-components">
              {savedComponents?.map((component, i) => {
                if (!component.user_component.isAuthor) {
                  return (
                    <div
                      key={'saved' + i}
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
              })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
