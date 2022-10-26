import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "./ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { BsImage } from "react-icons/bs";

function ChatInput() {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  //Gets firestore logged in user object
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {

    if (img) {
      const storageRef = ref(storage, uuid());

      //Adds image to storage
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //Adds image to the chat log array
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
                receiver: data.user.displayName,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        //Adds message to the chat log array
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          isRead: false,
          receiver: data.user.displayName,
        }),
      });
    }

    //Updates the chat document with the last message sent from user
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    //Updates the chat document with the last message for receiver
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSend();
  };


  return (
    <div className='firebase-chat-input'>
        <input onKeyDown={(e) => handleKey(e)}
        type='text'
        placeholder='Type something...'
        onChange={(e) => setText(e.target.value)}
        value={text}
        />
        <div className="firebase-send">
            <input
            type='file'
            style={{display: 'none'}}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
            />
            <label htmlFor='file'>
                <BsImage />
            </label>
            <button onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

export default ChatInput