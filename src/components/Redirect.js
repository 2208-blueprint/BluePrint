import React from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth, storage } from '../firebase'
import { collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Redirect() {

    const navigate = useNavigate()
    const toastLogin = (msg) => toast.success(msg);
    const toastError = (msg) => toast.error(msg);

    React.useEffect(() => {

        async function test() {
          const defaultProfilePicture = 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg';

          try{
            const {data} = await Axios.get('/api/auth/login/success')
            window.localStorage.setItem('token', data.token)

            const usersRef = collection(db, 'users')

            const q = query(usersRef, where("displayName", "==", data.user.displayName))
            const querySnapshot = await getDocs(q);

            console.log(data);
            if (querySnapshot.empty) {
              const res = await createUserWithEmailAndPassword(auth, data.user.emails[0].value, data.password);
              console.log(res);

              res.displayName = data.user.displayName;
              res.photoURL = data.user.photos[0].value;
              const date = new Date().getTime();
              const storageRef = ref(storage, `${data.user.displayName + date}`);
              const metadata = {
                contentType: 'image/png',
              };

              await uploadBytesResumable(storageRef, data.user.photos[0].value, metadata).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                  try {
                    //Update profile
                    await updateProfile(res.user, {
                      displayName: data.user.displayName,
                      photoURL: data.user.photos[0].value ? data.user.photos[0].value : defaultProfilePicture,
                    });
                    //create user on firestore
                    await setDoc(doc(db, "users", res.user.uid), {
                      uid: res.user.uid,
                      displayName: data.user.displayName,
                      email: data.user.emails[0].value,
                      photoURL: data.user.photos[0].value ? data.user.photos[0].value : defaultProfilePicture,
                    });

                    //create empty user chats on firestore
                    await setDoc(doc(db, "userChats", res.user.uid), {});

                    await signInWithEmailAndPassword(auth, data.user.emails[0].value, data.password)

                    navigate("/");
                  } catch (err) {
                    console.log(err);
                    setErr(true);
                    setLoading(false);
                  }
                });
              });
            }
            else {
              await signInWithEmailAndPassword(auth, data.user.emails[0].value, data.password);
            }

            navigate('/')
            toastLogin('You are logged in!')
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
    <></>
  )
}

export default Redirect