import React, { useContext } from "react";
import { ChatContext } from "./ChatContext";
import { Messages, ChatInput } from '../'
import { HiOutlineUserAdd, HiDotsHorizontal } from "react-icons/hi";

function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className='firebase-chat'>
        <div className="firebase-chat-info">
          <span><img src={data.user?.photoURL} /></span>
            <span>{data.user?.displayName}</span>
            <div className="firebase-chat-icons">
                <HiOutlineUserAdd />
                <HiDotsHorizontal />
            </div>
        </div>
        <Messages />
        <ChatInput />
      </div>
  )
}

export default Chat