import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChatSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const toastError = (err) => toast.error(err);

  const handleSearch = async () => {
    console.log('1');

    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) { return toastError('User not found!') }
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) { console.log(err) }

    setUser(null);
    setUsername("")
  };

  return (
    <div className='firebase-search'>
        <div className="firebase-searchform">
            <input
            type="text"
            placeholder=' Search users...'
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />
        </div>
        {err && <span>User not found!</span>}
        {user && (
          <div className="firebase-userchat" onClick={handleSelect}>
            <img src={currentUser.photoURL} alt="" />
            <div className="firebase-user-chat-info">
                <span>{user.displayName}</span>
            </div>
          </div>
          )}
    </div>
  )
}

export default ChatSearch