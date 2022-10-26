import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState, useRef } from "react";
import { ChatContext } from "./ChatContext";
import { db } from "../../firebase";
import Message from "./Message";

function Messages() {
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  //Gets all messages of the chat in context and sets in state
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  //Scrolls to bottom of messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView(false);
  },[messages])


  return (
    <div className='firebase-messages' id="firebase-messages-id">
        {messages.map((m) => (
          <Message message={m} key={m.id} />
          ))}
      <div ref={bottomRef} />
    </div>
  )
}

export default Messages