import React, { useContext } from "react";
import { ChatContext } from "./ChatContext";
import { Messages, ChatInput } from '../'
import { HiOutlineUserAdd } from "react-icons/hi";
import { RiCloseCircleFill } from 'react-icons/ri'

function Chat({chatVisible, setChatVisible}) {
  //Gets data of the selected chat
  const { data } = useContext(ChatContext);

  return (
    <div className='firebase-chat'>
        <div className="firebase-chat-info">
          <span><img src={data.user?.photoURL} /></span>
            <span>{data.user?.displayName}</span>
            <div className="firebase-chat-icons">
                <HiOutlineUserAdd />
                <RiCloseCircleFill size="40px" id="cancel-chat-button" onClick={() => {
                  (document.body.style.overflow = "visible")
                  setChatVisible(!chatVisible)}
                }/>
            </div>
        </div>
        <Messages />
        <ChatInput />
      </div>
  )
}

export default Chat