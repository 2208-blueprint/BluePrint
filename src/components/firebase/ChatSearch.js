import React from 'react'

function ChatSearch() {
  return (
    <div className='firebase-search'>
        <div className="firebase-searchform">
            <input type="text" placeholder=' Find a user...'/>
        </div>
        <div className="firebase-userchat">
            <img src="https://i2-prod.dailystar.co.uk/tech/gaming/article21695234.ece/ALTERNATES/s615/0_CrashBandicoot.jpg" alt="" />
            <div className="firebase-user-chat-info">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default ChatSearch