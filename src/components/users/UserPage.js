import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import UserPageComponentCard from "./UserPageComponentCard";
import ComponentCard from "../MainPage/ComponentCard";

//This is the full "profile page" of a user. The logged-in user can visit this page to see components made by this
//user, as well as follow the user to see more content from them.

function UserPage() {

    let navigate = useNavigate()
    const [curUser, setCurUser] = useState('')
    
    //Get current user number from URL path
    let curUserNum = window.location.pathname
    curUserNum = curUserNum.slice(7, curUserNum.length)

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

    let componentsArray = curUser?.components

    console.log('Cur User: ', curUser)

    if (componentsArray){
        console.log('Components Array: ', componentsArray[0])
    }
  

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
                    <img className="single-user-page-user-img" src={curUser?.img} alt="user_pic.png"/>
                    <button className="single-user-page-message-me-button">
                        Message me!
                    </button>
                 
                </div>
                <div className="single-user-page-user-name-rank-container">
                    <div className="single-user-page-user-name">
                        {curUser?.username}
                    </div>
                    <div className="single-user-page-rank-achievements">
                        Rank/achievements   
                </div>
            </div>
                <div className="single-user-page-user-stats-container">
                    <span>Components made: {curUser?.components?.length}</span>
                    <span>Followers:</span>
                    <span>Total Favorites:</span>
                    <span>Total Saves:</span>
                    <span>Bluepoints:</span>
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
                {componentsArray?.map((component,i) => (
                    <div className="single-user-page-single-component">
                        <ComponentCard componentId={component.id} key={i} />
                    </div>
                )
                    // <UserPageComponentCard componentId = {component.id} key = {i}/>
    
                )}
            </div>           
        </div>
        </>
    )
}

export default UserPage