import React from 'react'
import { Messages, ChatInput } from '../'
import { HiOutlineUserAdd, HiDotsHorizontal } from "react-icons/hi";

function Chat() {
  return (
    <div className='firebase-chat'>
        <div className="firebase-chat-info">
            <span>Jane</span>
            <div className="firebase-chat-icons">
                <HiOutlineUserAdd />
                <HiDotsHorizontal />
            </div>
        </div>
        <Messages />
        <ChatInput />    </div>
  )
}

export default Chat