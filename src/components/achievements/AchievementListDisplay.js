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
} from "./achievementListener";
import AchievementDisplay from "./AchievementDisplay";
import React, { useState } from "react";
//component used to display list of achievements in profile page

function AchievementListDisplay({ achievementTotal, user }) {
  return (
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
  );
}

export default AchievementListDisplay;
