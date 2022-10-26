import React from "react";

function AchievementDisplay({
  achievementDesc,
  achievementName,
  achievementIcon,
  pointVal,
  earned,
}) {
  //component used to display individual achievement user unlocks inside of profile
  return (
    <div
      className={
        earned
          ? "achievement-main-container-display"
          : "achievement-main-container-display-locked"
      }
    >
      {achievementIcon}
      <div className="achievement-info-container-display">
        <div className="achievement-title-display-locked">{`${achievementName} (${pointVal}pts)`}</div>
        <div className="achievement-desc-display-locked">{achievementDesc}</div>
      </div>
    </div>
  );
}

export default AchievementDisplay;
