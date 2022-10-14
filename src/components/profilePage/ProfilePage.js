import React from 'react'
import Axios from 'axios'
import { BsPeople, BsBookmarkStar, BsHeartFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdPeopleOutline, MdOutlineMail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProfilePage() {
    const [user, setUser] = React.useState()
    const [savedComponents, setSavedComponents] = React.useState([])
    const [followers, setFollowers] = React.useState([])

    const navigate = useNavigate();
    const toastPopup = (msg) => {
        toast.dark(msg, { autoClose: 2000 })
    }

    const uploadNavigate = (link) => {
        navigate(link)
    }

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
    <div className="profile-wrapper">
        <div className="profile-sidebar">
            <div className="profile-picture">
                <img src={user?.img} alt='' />
            </div>
            <div className="profile-category-link-container">
                <div className="profile-category-link"><b>{user?.firstName}</b></div>
                <div className="profile-category-link username"><small>{user?.username}</small></div>
                <div className="profile-category-link location"><FaMapMarkerAlt /><small>{user?.country}</small></div>
                <div className="profile-category-link followers"><small><BsPeople /> {followers ? followers.length : '0'} Followers</small></div>
                <div className="profile-category-link following"><small><MdPeopleOutline /> 0 Following</small></div>
                <div className="profile-category-link favorited"><small><BsBookmarkStar /> {savedComponents ? savedComponents.length : '0'} Favorited</small></div>
                <div className="profile-category-link likes"><small><BsHeartFill /> 0 Likes</small></div>
                <hr></hr>
                <div className="profile-category-link inbox"><p className='my-inbox'><MdOutlineMail />My Inbox</p></div>
                <hr></hr>
                <div className="profile-category-link"><p>Placeholder</p></div>
                <hr></hr>
                <div className="profile-new-component-button-container"><button className="profile-new-component-button">Create new component</button></div>
            </div>
        </div>
        <div className="profile-main-content-container">
            <div className="profile-user-extras-container">
                <div className="profile-user-info-container">
                    <h1>My info</h1>
                    <div className="profile-user-name">{`${user?.firstName} ${user?.lastName}`} <span className='profile-country-span'><FaMapMarkerAlt /><small>{user?.country}</small></span></div>
                    <div className="profile-user-email"><MdOutlineMail />{user?.email}</div>
                </div>
                <div className="profile-user-extras-left">
                    <h1>My uploads</h1>
                    <div className="profile-user-uploads">
                        {user?.components.map((component, i) => {
                            if (component.user_component.isAuthor) {
                                return <div key={i} className="profile-user-single-upload" onClick={() => uploadNavigate(`/components/${component.id}`)}>
                                            <div className="user-upload-image"><img src={component.img} alt=''/></div>
                                            <p>{component.name}</p>
                                            <div className="single-user-upload-frameworks">
                                                <div className="single-user-upload-framework">{component.framework}</div>
                                                <div className="single-user-upload-framework">{component.stylingFramework}</div>
                                            </div>
                                        </div>

                            }})
                        }
                    </div>
                </div>
            </div>
                <div className="profile-user-extras-right">
                    <h1>My favorites</h1>
                </div>
        </div>
    </div>
  )
}

export default ProfilePage