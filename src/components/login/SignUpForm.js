import React from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CountryList } from '../../components'
import { getSingleUser } from '../../store/users/singleUserSlice'
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword, updateProfile, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from '../../firebase'

function SignUpForm({ toggle, setToggle, setLoggedIn }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth(app);
    const storage = getStorage();

    const [username, setUserName] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [profilePicture, setProfilePicture] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [country, setCountry] = React.useState('United States')

    const toastError = (err) => toast.error(err);
    const toastCreate = (msg) => toast.success(msg);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const displayName = username;
        const defaultProfilePicture = 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg';

        let newUserObj = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            img: profilePicture,
            country: country,
        };

        if (!profilePicture.length) {
            newUserObj = {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                email: email,
                country: country,
                img: defaultProfilePicture,
            };
        }

        try {
            //Creates new user in postgres db and sets jwt
            const authorization = await Axios.post('/api/auth/signup', newUserObj)
            const { token } = authorization.data

            window.localStorage.setItem('token', token);

            //Creates user in firestore
            const res = await createUserWithEmailAndPassword(auth, email, password);
            res.displayName = username;

            if (!profilePicture) {
                res.photoURL = defaultProfilePicture;
            }
            else {
                res.photoURL = profilePicture;
            }

            //Creates user storage file in firestore
            const date = new Date().getTime();
            const storageRef = ref(storage, `${username + date}`);

            const metadata = {
                contentType: 'image/png',
              };

            await uploadBytesResumable(storageRef, profilePicture, metadata).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                  try {
                    //Update profile
                    await updateProfile(res.user, {
                      displayName: username,
                      photoURL: profilePicture ? profilePicture : defaultProfilePicture,
                    });
                    //Create user doc in firestore db
                    await setDoc(doc(db, "users", res.user.uid), {
                      uid: res.user.uid,
                      displayName: displayName,
                      email,
                      photoURL: profilePicture ? profilePicture : defaultProfilePicture,
                    });

                    //Create empty userchats doc in firestore db
                    await setDoc(doc(db, "userChats", res.user.uid), {});
                    navigate("/");
                  } catch (err) {
                    console.log(err);
                    setErr(true);
                    setLoading(false);
                  }
                });
              });

              //Signs created user in with firebase using AuthContext
              await signInWithEmailAndPassword(auth, email, password);


            setUserName('');
            setPassword('');
            setFirstName('')
            setLastName('')
            setEmail('')
            setProfilePicture('')
            setLoggedIn(true)
            setCountry('')
            dispatch(getSingleUser())

            navigate('/')
            toastCreate('Account created & logged in!')
        }
        catch(error) {

            //Checks which error for toast popup
            if (error.response) {
                if (error.response.data === 'Validation error: Validation isEmail on email failed'){
                    toastError('Invalid email')
                }
                if (error.response.data === 'Validation error'){
                    toastError('Username already in use')
                }
                if (error.response.data === 'Validation error: Validation isUrl on img failed'){
                    toastError('Invalid profile picture URL')
                }
                if (error.response.data === 'Validation error: Validation len on password failed'){
                    toastError('Password must be at least 6 characters!')
                }
            }
            console.log(error)
        }
      }

    return (
    <div className='signup-main-container'>
        <div className='signup-wrapper'>
            <div className='signup-form-container'>
                <div className='signup-form-container-top'>
                    <h1>Signup for an account</h1>
                </div>
                <div className='signup-form-bottom'>
                    <form className='signup-form' onSubmit={handleSubmit}>
                        <input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} value={username} required/>
                        <input type='text' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName} required/>
                        <input type='text' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName} required/>
                        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
                        <input type='input' placeholder='Profile picture URL (optional)' onChange={(e) => setProfilePicture(e.target.value)} value={profilePicture}/>
                        <CountryList country={country} setCountry={setCountry}/>
                        <button className='signup-submit-button'>Sign Up</button>
                    </form>
                </div>
                </div>
            <div className='signup-toggle-container'>
                <h1>Already have an account?</h1>
                <button onClick={() => setToggle(!toggle)}>Log In</button>
            </div>
        </div>
    </div>
    )
}

export default SignUpForm