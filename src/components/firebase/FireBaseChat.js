import React from 'react'
import { ChatSideBar, Chat } from '../index'

function fireBaseChat({ chatVisible, setChatVisible }) {


  return (
    <div className="firebase-chat-wrapper">
        <div className="firebase-chat-container">
            <ChatSideBar />
            <Chat chatVisible={chatVisible} setChatVisible={setChatVisible}/>
        </div>
    </div>
  )
}

export default fireBaseChat