import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from '../../store/users/singleUserSlice'
import { FaBars, FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import { GoMail } from 'react-icons/go'
import { MdMailOutline } from 'react-icons/md'
import { IconContext } from "react-icons";
import { toast } from 'react-toastify';
import Sidebar from '../MainPage/Sidebar.js'
import { AuthContext } from '../firebase/AuthContext'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import anime from "animejs/lib/anime.es.js"
import { FireBaseChat } from '../index'

function Navigation({loggedIn, setLoggedIn}){

    const [toggle, setToggle]=React.useState(true);
    const user = useSelector(state => state.singleUser)
    const { currentUser } = useContext(AuthContext)
    const [show, setShow] = React.useState(false)
    const [chatVisible, setChatVisible] = React.useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toastError = (err) => toast.error(err);
    const toastSuccess = (msg) => toast.success(msg);

    React.useEffect(()=>{
        if (window.localStorage.getItem('token')){
            setLoggedIn(true)
            dispatch(getSingleUser())
        } else {
            setLoggedIn(false)
        }
    },[])

    const logoutHandler = async() => {
        await signOut(auth)
        window.localStorage.removeItem('token')
        setLoggedIn(false)
        toastSuccess('Successfully logged out!')
        navigate('/')
        window.location.reload(false)
    }

    const profileHandler = () => {
        navigate('/profile')
    }

    let style= {
        right: (toggle ? "-100%":"0")
    }

    const fallDownHandler = () => {
        setShow(!show)
    }

    return(
        <>
        {chatVisible ?
        <div className="chatbox-container-backdrop">
            <FireBaseChat chatVisible={chatVisible} setChatVisible={setChatVisible}/>
        </div>
        :
        null}
        <div id="navigation-root-container">
        <nav className="navigation">
            <a className="navigation-logo" href="/"><span className="logo-blue">Blue</span>Print</a>

            <div className="navigation-link-wrapper">
                {loggedIn ?
                <>
                    <Link to='/profile/create'>CREATE COMPONENT</Link>
                    <div className="inbox-chat-icon" onClick={() =>
                        {
                        setChatVisible(!chatVisible)
                        document.body.style.overflow = chatVisible ? "visible" : "hidden"
                        }
                        }><GoMail size="40px"/></div>
                    <div onClick={fallDownHandler} className="navigation-profile">
                        <img src={user?.img}></img>
                        <p>{user?.username}</p>
                        <span className="navigation-down-arrow">
                        {show ? <IconContext.Provider value={{size: '18px'}}>
                            <BiDownArrow/>
                        </IconContext.Provider> :
                        <IconContext.Provider value={{size: '18px'}}>
                            <BiUpArrow/>
                        </IconContext.Provider>}
                        </span>
                    </div>
                </>
                :
                <>
                    <Link className="navigation-search-button" to='/users/search'>
                        <IconContext.Provider value={{size: '20px'}}>
                            <BsSearch/>
                        </IconContext.Provider>
                        Search Users
                        </Link>
                    <Link to='/login'>CREATE COMPONENT</Link>
                    <Link className="navigation-logout" to='/login'>LOGIN</Link>
                </>
                }
            </div>

            {show ? <div className="navigation-fall-down">
                <a onClick={()=>{
                    navigate('/profile')
                    setShow(!show)
                }}><IconContext.Provider value={{size: '20px'}}>
                        <FaUserCircle/>
                    </IconContext.Provider>My Profile
                </a>
                <a onClick={()=>{
                    navigate('/chat')
                    setShow(!show)
                }}><IconContext.Provider value={{size: '20px'}}>
                        <MdMailOutline/>
                    </IconContext.Provider>Chat
                </a>
                <a onClick={()=>{
                    navigate('/users/search')
                    setShow(!show)
                }}>
                    <IconContext.Provider value={{size: '20px'}}>
                        <BsSearch/>
                    </IconContext.Provider>Search Users
                </a>
                <a onClick={logoutHandler} className="navigation-logout">LOGOUT</a>
            </div> : <></>}

            <div className="navigation-drop-down" onClick={()=>setToggle(!toggle)}>
                <IconContext.Provider value={{size: '40px'}}>
                    <FaBars/>
                </IconContext.Provider>
            </div>
            <div className="navigation-side-bar" style={style}>
            {loggedIn ?
                <>
                    <div onClick={() => {profileHandler()
                    setToggle(!toggle)}} className="navigation-profile">
                        <img src={user?.img}></img>
                        <p>{user?.username}</p>
                    </div>
                    <div className="navigation-profile" onClick={()=>{
                        navigate('/chat')
                        setToggle(!toggle)
                    }}><IconContext.Provider value={{size: '20px'}}>
                        <MdMailOutline/>
                    </IconContext.Provider>Chat
                    </div>
                    <a className="navigation-search-button" onClick={()=>{
                        navigate('/users/search')
                        setToggle(!toggle)
                    }}>
                    <IconContext.Provider value={{size: '20px'}}>
                        <BsSearch/>
                    </IconContext.Provider>Search Users
                    </a>
                    <a onClick={() => {logoutHandler()
                    setToggle(!toggle)}} className="navigation-logout">LOGOUT</a>
                    <Link onClick={()=>setToggle(!toggle)} to='/profile/create'>CREATE COMPONENT</Link>
                    <Sidebar/>
                </>
                :
                <>
                    <a className="navigation-search-button" onClick={()=>{
                        navigate('/users/search')
                        setToggle(!toggle)
                    }}>
                    <IconContext.Provider value={{size: '20px'}}>
                        <BsSearch/>
                    </IconContext.Provider>Search Users
                    </a>
                    <Link onClick={()=>setToggle(!toggle)} className="navigation-logout" to='/login'>LOGIN</Link>
                    <Link onClick={()=>setToggle(!toggle)} to='/login'>CREATE COMPONENT</Link>
                    <Sidebar/>
                </>
                }
            </div>
        </nav>
        </div>
        </>
    )
}

export default Navigation;