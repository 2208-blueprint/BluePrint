import { doc, onSnapshot} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "./ChatContext";
import { db } from "../../firebase";

function Chats() {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);


  const handleSelect = async(u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };


  return (
    <div className='firebase-chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
        className="firebase-userchat"
        key={chat[0]}
        onClick={() => { handleSelect(chat[1].userInfo) }}
        >
            <img src={chat[1].userInfo.photoURL} alt=""/>
            <div className="firebase-user-chat-info">
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].lastMessage?.text}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Chats