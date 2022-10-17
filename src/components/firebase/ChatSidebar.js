import React from 'react'
import { ChatNavbar, ChatSearch, Chats } from '../'

function ChatSideBar() {
  return (
    <div className='firebase-chat-sidebar'>
      <ChatNavbar />
      <ChatSearch />
      <Chats />
    </div>
  )
}

export default ChatSideBar