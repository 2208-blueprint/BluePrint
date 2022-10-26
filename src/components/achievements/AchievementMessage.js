import React from "react";

function AchievementMessage({
  achievementDesc,
  achievementName,
  achievementIcon,
  pointVal,
}) {
  //component that displays in toastify when achievement is earned
  return (
    <div className="achievement-main-container">
      {achievementIcon}
      <div className="achievement-info-container">
        <div className="achievement-unlocked">Achievement Unlocked</div>
        <div className="achievement-title">{`${achievementName} (${pointVal}pts)`}</div>
        <div className="achievement-desc">{achievementDesc}</div>
      </div>
    </div>
  );
}

export default AchievementMessage;
