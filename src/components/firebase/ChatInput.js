import React from 'react'
import { IoMdAttach } from "react-icons/io";
import { BsImage } from "react-icons/bs";

function ChatInput() {
  return (
    <div className='firebase-chat-input'>
        <input type='text' placeholder='Type somthing...' />
        <div className="firebase-send">
            <IoMdAttach />
            <input type='file' style={{display: 'none'}} id="file" />
            <label htmlFor='file'>
                <BsImage />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default ChatInput