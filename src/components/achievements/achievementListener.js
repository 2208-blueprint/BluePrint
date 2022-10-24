import AchievementMessage from "./AchievementMessage";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { BiCool } from "react-icons/bi";
import { RiHeartsFill } from "react-icons/ri";
import { FaCrown, FaSave } from "react-icons/fa";
import {
  GiCrownedHeart,
  GiHeartWings,
  GiHeartburn,
  GiMedallist,
} from "react-icons/gi";
import { AiFillTrophy } from "react-icons/ai";
import axios from "axios";

//style achievement box
const toastSettings = (id) => {
  return {
    toastId: id,
    transition: Zoom,
    autoClose: 5000,
    hideProgressBar: false,
    style: {
      backgroundColor: "rgb(53, 53, 111)",
      margin: 0,
    },
    bodyClassName: "toast-body",
    progressClassName: "toast-progress",
  };
};
const toastSettingsFirst = (id) => {
  return {
    toastId: id,
    transition: Zoom,
    autoClose: 5000,
    hideProgressBar: true,
    style: {
      border: "10px solid rgb(53, 53, 111)",
      margin: 0,
      backgroundColor: "#D79D1D",
      color: "white",
    },
    bodyClassName: "toast-body",
    progressClassName: "toast-progress",
  };
};

//icon passed to achievement component
export const newUser = <BsFillHouseFill size="40px" />;
export const twoForOne = <RiHeartsFill size="40px" />;
export const tenForOne = <GiCrownedHeart size="40px" />;
export const twentyFiveForOne = <GiHeartWings size="40px" />;
export const fiftyForOne = <GiHeartburn size="40px" />;
export const twoSaves = <FaSave color="#CD7F32" size="40px" />;
export const tenSaves = <FaSave color="#C0C0C0" size="40px" />;
export const twentyFiveSaves = <FaSave color="#FFD700" size="40px" />;
export const fiftySaves = <FaSave color="#b8fffb" size="40px" />;
export const twoFollows = <BsFillPersonFill size="40px" />;
export const tenFollows = <BsFillPersonPlusFill size="40px" />;
export const twentyFiveFollows = <GiMedallist size="40px" />;
export const fiftyFollows = <BiCool size="80px" />;
export const rankedFirst = <FaCrown size="40px" />;
export const topComponent = <AiFillTrophy size="40px" />;

const updateAchievements = async (currentUser) => {
  //new user achievement
  if (currentUser.newUserUnlocked && !currentUser.newUserDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 5;
    await axios.put("/api/admin/awardAchievement", {
      newUserDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Welcome to Blueprint!"
          achievementDesc="Join our awesome community of developers."
          pointVal={5}
          achievementIcon={newUser}
        />,
        toastSettings("newUser")
      );
    }, 1000);
    return;
  }
  //2 favorites on a component
  if (currentUser.twoFavoriteUnlocked && !currentUser.twoFavoriteDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 20;
    await axios.put("/api/admin/awardAchievement", {
      twoFavoriteDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Two-for-One"
          achievementDesc="Get 2 favorites on one component."
          pointVal={20}
          achievementIcon={twoForOne}
        />,
        toastSettings("twoForOne")
      );
    }, 1000);
    return;
  }
  //10 favorites on component
  if (currentUser.tenFavoriteUnlocked && !currentUser.tenFavoriteDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 50;
    await axios.put("/api/admin/awardAchievement", {
      tenFavoriteDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Ten-for-One"
          achievementDesc="Get 10 favorites on one component."
          pointVal={50}
          achievementIcon={tenForOne}
        />,
        toastSettings("tenForOne")
      );
    }, 1000);
    return;
  }
  //twentyFive favs on component
  if (
    currentUser.twentyFiveFavoriteUnlocked &&
    !currentUser.twentyFiveFavoriteDisplayed
  ) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 200;
    await axios.put("/api/admin/awardAchievement", {
      twentyFiveFavoriteDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Twenty-Five-for-One"
          achievementDesc="Get 25 favorites on one component."
          pointVal={200}
          achievementIcon={twentyFiveForOne}
        />,
        toastSettings("twentyFiveForOne")
      );
    }, 1000);
    return;
  }
  //fifty on component
  if (
    currentUser.fiftyFavoriteUnlocked &&
    !currentUser.fiftyFavoriteDisplayed
  ) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 300;
    await axios.put("/api/admin/awardAchievement", {
      fiftyFavoriteDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Fifty-for-One"
          achievementDesc="Get 50 favorites on one component."
          pointVal={300}
          achievementIcon={fiftyForOne}
        />,
        toastSettings("fiftyForOne")
      );
    }, 1000);
    return;
  }
  //get two saves on component
  if (currentUser.twoSaveUnlocked && !currentUser.twoSaveDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 20;
    await axios.put("/api/admin/awardAchievement", {
      twoSaveDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Two Saves"
          achievementDesc="Get 2 saves on one component."
          pointVal={20}
          achievementIcon={twoSaves}
        />,
        toastSettings("twoSaves")
      );
    }, 1000);
    return;
  }
  //get ten saves on a component
  if (currentUser.tenSaveUnlocked && !currentUser.tenSaveDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 50;
    await axios.put("/api/admin/awardAchievement", {
      tenSaveDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Ten Saves"
          achievementDesc="Get 10 saves on one component."
          pointVal={50}
          achievementIcon={tenSaves}
        />,
        toastSettings("tenSaves")
      );
    }, 1000);
    return;
  }
  //get 25 saves on a component
  if (
    currentUser.twentyFiveSaveUnlocked &&
    !currentUser.twentyFiveSaveDisplayed
  ) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 200;
    await axios.put("/api/admin/awardAchievement", {
      twentyFiveSaveDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Twenty-Five Saves"
          achievementDesc="Get 25 saves on one component."
          pointVal={200}
          achievementIcon={twentyFiveSaves}
        />,
        toastSettings("twentyFiveSaves")
      );
    }, 1000);
    return;
  }
  //get 50 saves on a component
  if (currentUser.fiftySaveUnlocked && !currentUser.fiftySaveDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 200;
    await axios.put("/api/admin/awardAchievement", {
      fiftySaveDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Twenty-Five Saves"
          achievementDesc="Get 25 saves on one component."
          pointVal={200}
          achievementIcon={fiftySaves}
        />,
        toastSettings("fiftySaves")
      );
    }, 1000);
    return;
  }
  //get 2 followers
  if (currentUser.twoFollowsUnlocked && !currentUser.twoFollowsDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 20;
    await axios.put("/api/admin/awardAchievement", {
      twoFollowsDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="From Humble Beginnings"
          achievementDesc="Congratulations! You've had 2 users follow you."
          pointVal={20}
          achievementIcon={twoFollows}
        />,
        toastSettings("twoFollows")
      );
    }, 1000);
    return;
  }
  //get 10 followers
  if (currentUser.tenFollowsUnlocked && !currentUser.tenFollowsDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 50;
    await axios.put("/api/admin/awardAchievement", {
      tenFollowsDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Well On Your Way"
          achievementDesc="10 users are looking forward to your next post!"
          pointVal={50}
          achievementIcon={tenFollows}
        />,
        toastSettings("tenFollows")
      );
    }, 1000);
    return;
  }
  //get 25 followers
  if (
    currentUser.twentyFiveFollowsUnlocked &&
    !currentUser.twentyFiveFollowsDisplayed
  ) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 200;
    await axios.put("/api/admin/awardAchievement", {
      twentyFiveFollowsDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Content Creator"
          achievementDesc="'Don't forget to like, comment, and subscribe' (25 followers)"
          pointVal={200}
          achievementIcon={twentyFiveFollows}
        />,
        toastSettings("twentyFiveFollows")
      );
    }, 1000);
    return;
  }
  //get 50 followers
  if (currentUser.fiftyFollowsUnlocked && !currentUser.fiftyFollowsDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 300;
    await axios.put("/api/admin/awardAchievement", {
      fiftyFollowsDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="BluePoint Celebrity"
          achievementDesc="50 users are furiously copy-pasting your code into their projects. We at BluePrint thank you for your charitable contributions!"
          pointVal={300}
          achievementIcon={fiftyFollows}
        />,
        toastSettings("fiftyFollows")
      );
    }, 1000);
    return;
  }
  //had first component
  if (currentUser.hadTopComponent && !currentUser.hadTopComponentDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 100;
    await axios.put("/api/admin/awardAchievement", {
      hadTopComponentDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="King of the Hill"
          achievementDesc="Have your component rank first on the site!"
          pointVal={100}
          achievementIcon={topComponent}
        />,
        toastSettingsFirst("rankOneComponent")
      );
    }, 1000);
    return;
  }
  //check if user was first
  if (currentUser.wasFirst && !currentUser.wasFirstDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 100;
    await axios.put("/api/admin/awardAchievement", {
      wasFirstDisplayed: true,
      currentPoints: updatedPoints,
      highestRank:
        updatedPoints > currentUser.highestRank
          ? updatedPoints
          : currentUser.highestRank,
    });
    setTimeout(() => {
      toast.dark(
        <AchievementMessage
          achievementName="Nice going, Chief."
          achievementDesc="Rank first on the site!"
          pointVal={100}
          achievementIcon={rankedFirst}
        />,
        toastSettingsFirst("rankOne")
      );
    }, 1000);
  }
};

export default updateAchievements;
