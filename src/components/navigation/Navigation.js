import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleUser } from '../../store/users/singleUserSlice'
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../MainPage/Sidebar.js'

function Navigation({loggedIn, setLoggedIn}){

    const [toggle, setToggle]=React.useState(true);
    const user = useSelector(state => state.singleUser)

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

    const logoutHandler = () => {
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

    return(
        <div id="navigation-root-container">
        <nav className="navigation">
            <a className="navigation-logo" href="/"><img src={'/trianglify-lowres.png'} alt="Logo Here"/></a>

            <div className="navigation-link-wrapper">
                {loggedIn ? 
                <>
                    <Link to='/profile/create'>CREATE COMPONENT</Link>
                    <a onClick={logoutHandler} className="navigation-logout">LOGOUT</a>
                    <div onClick={profileHandler} className="navigation-profile">
                        <img src={user?.img}></img>
                        <p>{user?.username}</p>
                    </div>
                </>
                :
                <>
                    <Link to='/login'>CREATE COMPONENT</Link>
                    <Link className="navigation-logout" to='/login'>LOGIN</Link>
                </>
                }
            </div>

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
                    <a onClick={() => {logoutHandler()
                    setToggle(!toggle)}} className="navigation-logout">LOGOUT</a>
                    <Link onClick={()=>setToggle(!toggle)} to='/profile/create'>CREATE COMPONENT</Link>
                    <Sidebar/>
                </>
                :
                <>
                    <Link onClick={()=>setToggle(!toggle)} className="navigation-logout" to='/login'>LOGIN</Link>
                    <Link onClick={()=>setToggle(!toggle)} to='/login'>CREATE COMPONENT</Link>
                    <Sidebar/>
                </>
                }
            </div>
        </nav>
        </div>
    )
}

export default Navigation;