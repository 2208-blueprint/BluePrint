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

function ChatSearch() {
  const [username, setUsername] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allUserChats, setAllUserChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  React.useEffect(() => {
    async function getAllUsers() {
      const allUsersFromFirebase = query(
        collection(db, "users"),
      );
      const allChats = collection(db, "chats")
      const chatsQuery = await getDocs(allChats)
      const filteredChats = chatsQuery.docs.filter(chat => chat.id.includes(currentUser.uid))

      setAllUserChats(filteredChats)

      // const allChatsSnapshot = await getDocs(allChats);
      // setAllChats(allChatsSnapshot);


      const allUsersSnapshot = await getDocs(allUsersFromFirebase);
      const allUsersArray = [];
      allUsersSnapshot.forEach((user) => {
        allUsersArray.push(user.data())
      })
      setAllUsers(allUsersArray)

    }
    getAllUsers();
  }, [])

  const filteredUsersData = allUsers?.filter((user) => {
    if (user.displayName.toLowerCase().includes(username.toLowerCase())) {
      for (let i = 0; i < allUserChats.length; i++) {
        if (allUserChats[i].id.includes(user.uid)) {
          return false
        }
      }
      return true
    } else {
      return false
    }
  })

  const handleSelect = async (user) => {
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

    setUsername("")
  };

  return (
    <div className='firebase-search'>
        <div className="firebase-searchform">
            <input
            type="text"
            placeholder=' Search users...'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            />
        </div>
        <div className="filtered-users">
        {username && (
          filteredUsersData.map((user, i) => {
            return (
              <div className="firebase-userchat" onClick={() => {
                handleSelect(user)
              }}>
                <img src={user.photoURL} alt="" />
                <div className="firebase-user-chat-info">
                <span>{user.displayName}</span>
                </div>
              </div>
            )
          })
          )}
        </div>
    </div>
  )
}

export default ChatSearch