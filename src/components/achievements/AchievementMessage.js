import React from "react";

function AchievementMessage({
  achievementDesc,
  achievementName,
  achievementIcon,
  pointVal,
}) {
  return (
    <div className="achievement-main-container">
      {achievementIcon}
      <div className="achievement-info-container">
        <div className="achievement-unlocked">Achievement Unlocked</div>
        <div className="achievement-title">{achievementName}</div>
        <div className="achievement-desc">{achievementDesc}</div>
      </div>
    </div>
  );
}

export default AchievementMessage;
