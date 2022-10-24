import React from 'react'
import Axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth, storage } from '../firebase'
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Redirect() {

    const navigate = useNavigate()
    const toastLogin = (msg) => toast.success(msg);
    const toastError = (msg) => toast.error(msg);

    React.useEffect(() => {

        async function test() {
          const defaultProfilePicture = 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg';
          let socialProfilePhoto = '';
          let socialDisplayName = '';

          try{
            const {data} = await Axios.get('/api/auth/login/success')
            window.localStorage.setItem('token', data.token)

            const usersRef = collection(db, 'users')
            let socialLoginEmail = '';

            if (data.user.provider !== 'twitch') {
              socialLoginEmail = data.user.emails[0].value;
              socialProfilePhoto = data.user.photos[0].value;
              socialDisplayName = data.user.displayName;
            }
            else {
              socialLoginEmail = data.user.email;
              socialProfilePhoto = data.user.profile_image_url;
              socialDisplayName = data.user.display_name;
            }

            const q = query(usersRef, where("email", "==", socialLoginEmail))
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
              const res = await createUserWithEmailAndPassword(auth, socialLoginEmail, data.password);
              console.log(res);

              res.displayName = socialDisplayName;

              if (data.user.provider !== 'twitch') {
                res.photoURL = socialProfilePhoto;
              }
              else {
                res.photoURL = socialProfilePhoto;
              }

              const date = new Date().getTime();
              const storageRef = ref(storage, `${socialDisplayName + date}`);
              const metadata = {
                contentType: 'image/png',
              };

              await uploadBytesResumable(storageRef, socialProfilePhoto, metadata).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                  try {
                    //Update profile
                    await updateProfile(res.user, {
                      displayName: socialDisplayName,
                      photoURL: socialProfilePhoto ? socialProfilePhoto : defaultProfilePicture,
                    });
                    //create user on firestore
                    await setDoc(doc(db, "users", res.user.uid), {
                      uid: res.user.uid,
                      displayName: socialDisplayName,
                      email: socialLoginEmail,
                      photoURL: socialProfilePhoto ? socialProfilePhoto : defaultProfilePicture,
                    });

                    //create empty user chats on firestore
                    await setDoc(doc(db, "userChats", res.user.uid), {});

                    await signInWithEmailAndPassword(auth, socialLoginEmail, data.password)

                  } catch (err) {
                    console.log(err);
                  }
                });
              });
            }
            else {
              await signInWithEmailAndPassword(auth, socialLoginEmail, data.password);
            }

            setTimeout(() => {
              window.location.replace('https://fsa-blueprint.herokuapp.com')
              toastLogin('You are logged in!')
            }, 3000)


          }
          catch(e) {
            toastError('You have already logged in with that email!')
            navigate('/login')
            console.log(e)
          }
        }
        test()
    }, [])

  return (
    <>
    <div className='redirect-loading'>
      <h1>Please wait, loading profile...</h1>
    </div>
    </>
  )
}

export default Redirect