import React from 'react'
import {initializeApp} from 'firebase/app';
import {getMessaging, getToken, onMessage} from 'firebase/messaging';
import { ChatSideBar, ChatNavbar, Chat } from '../index'



const firebaseConfig = {
  apiKey: "AIzaSyDw9hYM1Xfh5VV3PCio4kQS8XD3d4QFWQQ",
  authDomain: "blueprint-e65e7.firebaseapp.com",
  projectId: "blueprint-e65e7",
  storageBucket: "blueprint-e65e7.appspot.com",
  messagingSenderId: "467520123270",
  appId: "1:467520123270:web:effd61eb49f854a85d3c07",
  measurementId: "G-1NWB7FPPCG"
};

function fireBaseChat() {

    const [user, setUser] = React.useState()

    React.useEffect(() => {
        async function getUser() {
            try {
                const token = window.localStorage.getItem('token');
                if (token) {
                    const {data} = await Axios.get('api/profile', {
                        headers: {
                            authorization: token,
                        }
                    })
                    console.log(data);
                    setUser(data)

                    const followers = await Axios.get('api/users/followers');
                    setFollowers(followers.data)

                    const savedComponents = data.components.filter((component) => component.user_component.isSaved)

                    setSavedComponents(savedComponents)
                }
                else {
                    navigate('/login')
                    toastPopup('🖥️ Login to view your profile')
                }
            }
            catch(err) {
                console.log(err);
            }
        }
        getUser()

    }, [])

  return (
    <div className="firebase-chat-wrapper">
        <div className="firebase-chat-container">
            <ChatSideBar />
            <Chat />
        </div>
    </div>
  )
}

export default fireBaseChat