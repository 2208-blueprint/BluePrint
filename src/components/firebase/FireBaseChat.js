import React from 'react'
import {initializeApp} from 'firebase/app';
import {getMessaging, getToken, onMessage} from 'firebase/messaging';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import { app } from '../../firebase'
import { ChatSideBar, ChatNavbar, Chat } from '../index'
import Axios from 'axios'
import testImage from '../images/cog3.png'


function fireBaseChat() {

    const [user, setUser] = React.useState()
    const [err, setErr] = React.useState(false)
    const [loading, setLoading] = React.useState(false);

    // const storage = getStorage();
    // const auth = getAuth(app);


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

                    // const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
                //     console.log(res);

                //     const storageRef = ref(storage, data.username);
                //     const uploadTask = uploadBytesResumable(storageRef, data.img);

                //     uploadTask.on(
                //         (error) => {
                //             setErr(true)
                //         },
                //         () => {
                //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                //             console.log('File available at', downloadURL);
                //         });
                //     }
                // );
                }
                else {
                    navigate('/login')
                    toastPopup('🖥️ Login to view your profile')
                }
            }
            catch(err) {
                setErr(true)
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