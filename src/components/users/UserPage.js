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
        <div className="single-user-main-container">
            <div className="user-page-header-container">
                <img alt='user-image'/>
                <div className="user-page-title"></div>
                <div className="user-page-info-container">
                    <div className="user-number-components-made"></div>
                    <div className="user-number-followers">15 followers</div>
                    <button onClick={handleMessageMeButton} className="user-message-me-button">Message me!</button>
                </div>
            </div>

            <div className="user-page-components-container">

            {componentsMade.map((component, i) => 
                    <div key={i} value={i + 1} onClick={handleSelectComponent} className="user-page-single-component-container">
                        Component #{component}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default UserPage