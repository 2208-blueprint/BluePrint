import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "./ChatContext";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  //Scrolls to bottom message
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  //Gets the date info of message and splits it to display only
  //necessary parts
  const replyDate = message.date.toDate().toString();
  const dateSent = replyDate.split(" ").splice(1,2).join(" ");
  const timeSent = replyDate.split(" ")[4].slice(0,5)


  return (
    <div
    re={ref}
    className={`firebase-chat-message ${message.senderId === currentUser.uid && "owner"}`}>
        <div className="firebase-message-info">
        <img id='message-inner-pic' src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
            }
            alt="" />
        <span id="date-sent">{dateSent}</span>
        <span id="time-sent">{timeSent}</span>
        </div>
        <div className="firebase-message-content">
            <p>{message.text}</p>
            {message.img && <img src={message.img} alt="" />}
        </div>
    </div>
  )
}

export default Message