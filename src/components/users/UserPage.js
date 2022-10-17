import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

//This is the full "profile page" of a user. The logged-in user can visit this page to see components made by this
//user, as well as follow the user to see more content from them.

function UserPage() {

    const componentsMade = []
    let navigate = useNavigate()
    const [curUser, setCurUser] = useState('')
    
    let curUserNum = window.location.pathname
    curUserNum = curUserNum.slice(7, curUserNum.length)

    console.log('Window search: ', curUserNum)
    React.useEffect(() => {

        async function getAllUsers() {
            try{
                let curUser = await Axios.get(`/api/users/${curUserNum}`);
                setCurUser(curUser.data) 
            }
            catch(e) {
            console.error(e)
            }
        }
        getAllUsers()

    },[])

    console.log('Cur User: ', curUser)

    function handleSelectComponent(evt){
        evt.preventDefault()
        navigate(`/components/${evt.target.id}`)
    }
    function handleMessageMeButton(evt){
        evt.preventDefault()
    }
    return(
        <>
        <div className="single-user-page-main-container">
            <div className="single-user-page-title-container">
                <div className="single-user-page-user-pic">
                    <img alt="user_pic.png"/>
                </div>
                <div className="single-user-page-user-name-rank-container">
                    <div className="single-user-page-user-name">
                        User Name
                    </div>
                    <div className="single-user-page-rank-achievements">
                        Rank/achievements   
                </div>
            </div>
                <div className="single-user-page-user-stats-container">
                    <span>Components made</span>
                    <span>Followers</span>
                    <span>Total Favorites</span>
                    <span>Total Saves</span>
                    <span>Bluepoints</span>
                </div>
            </div>
            <div className="single-user-page-search-container">
                <div className="single-user-page-search-bar">
                    Search bar
                </div>
                <div className="single-user-page-filter">
                    Filter by...
                </div>
            </div>
            <div className="single-user-page-component-list-container">
                <div className="single-user-page-single-component">
                    Single Component
                </div>
                <div className="single-user-page-single-component">
                    Single Component
                </div>
                <div className="single-user-page-single-component">
                    Single Component
                </div>
            </div>           
        </div>
        </>
    )
}

export default UserPage