import AchievementMessage from "./AchievementMessage";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import { BsFillHouseFill } from "react-icons/bs";
import { RiHeartsFill } from "react-icons/ri";
import { FaCrown } from "react-icons/fa";
import { GiCrownedHeart, GiHeartWings, GiHeartburn } from "react-icons/gi";
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
const newUser = <BsFillHouseFill size="40px" />;
const twoForOne = <RiHeartsFill size="40px" />;
const tenForOne = <GiCrownedHeart size="40px" />;
const twentyFiveForOne = <GiHeartWings size="40px" />;
const fiftyForOne = <GiHeartburn size="40px" />;
const rankedFirst = <FaCrown size="40px" />;

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
          achievementName="TwentyFive-for-One"
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
    const updatedPoints = userPoints + 500;
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
          achievementName="TwentyFive-for-One"
          achievementDesc="Get 25 favorites on one component."
          pointVal={500}
          achievementIcon={fiftyForOne}
        />,
        toastSettings("fiftyForOne")
      );
    }, 1000);
    return;
  }
  //check if user was first
  if (currentUser.wasFirst && !currentUser.wasFirstDisplayed) {
    const userPoints = currentUser.currentPoints;
    const updatedPoints = userPoints + 500;
    await axios.put("/api/admin/awardAchievement", {
      // wasFirstDisplayed: true,
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
          pointVal={500}
          achievementIcon={rankedFirst}
        />,
        toastSettingsFirst("rankOne")
      );
    }, 1000);
  }
};

export default updateAchievements;
