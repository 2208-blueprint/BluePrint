import React from 'react'

function ChatNavbar() {
  return (
    <div className='firebase-navbar'>
        <span className="firebase-logo">BluePrint Chat</span>
        <div className="firebase-user">
            <img src="https://i2-prod.dailystar.co.uk/tech/gaming/article21695234.ece/ALTERNATES/s615/0_CrashBandicoot.jpg" alt="" />
            <span>Cathal</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default ChatNavbar