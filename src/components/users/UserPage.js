import React from "react";
import { useSelector } from "react-redux";

//This is the full "profile page" of a user. The logged-in user can visit this page to see components made by this
//user, as well as follow the user to see more content from them.

function UserPage(props) {

    let componentsMade = ['1','2','3','4','5','6','7','8','9', '10', '11', '12']
    let userList = useSelector((state) => state.users)

    function handleSelectComponent(evt){
        evt.preventDefault()
        console.log('Gonna search for that component now: #', evt.target.getAttribute('value'))
    }
    function handleMessageMeButton(evt){
        evt.preventDefault()
        console.log('Messaging the user now!')
    }
    return(
        <>
        <div className="single-user-main-container">
            <div className="user-page-header-container">
                <img className="user-page-image" alt='user-image'/>
                <div className="user-page-title">User Title/Name</div>
                <div className="user-page-info-container">
                    <div className="user-number-components-made">10 components made</div>
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