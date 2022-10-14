import React from 'react'

function Message() {
  return (
    <div className='firebase-chat-message owner'>
        <div className="firebase-message-info">
        <img src="https://i2-prod.dailystar.co.uk/tech/gaming/article21695234.ece/ALTERNATES/s615/0_CrashBandicoot.jpg" alt="" />
        <span>just now</span>
        </div>
        <div className="firebase-message-content">
            <p>Hello</p>
            <img src="https://i2-prod.dailystar.co.uk/tech/gaming/article21695234.ece/ALTERNATES/s615/0_CrashBandicoot.jpg" alt="" />
        </div>
    </div>
  )
}

export default Message