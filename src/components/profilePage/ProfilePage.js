import React from 'react'
import Axios from 'axios'
import { BsPeople, BsBookmarkStar } from 'react-icons/bs'

function ProfilePage() {
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
                <div className="profile-category-link"><small>{user?.username}</small></div>
                <div className="profile-category-link"><small><BsPeople /> 0 Followers</small></div>
                <div className="profile-category-link"><small><BsBookmarkStar /> 0 Favorited</small></div>
                <div className="profile-category-link"><p>Placeholder</p></div>
                <div className="profile-category-link"><p>Placeholder</p></div>
            </div>
        </div>
        <div className="profile-main-content-container">
            <div className="profile-user-info-container">

            </div>
        </div>
    </div>
  )
}

export default ProfilePage