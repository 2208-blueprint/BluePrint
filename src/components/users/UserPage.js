import React from "react";

function UserPage(props) {

    let curUser = props
    console.log('curUser: ', curUser)
    return(
        <>
            <div className="user-page-header-container">
                User Page
                <img className="user-page-image" />
                <div className="user-page-title" />
                <div className="user-page-info" />
            </div>
            <div>
                <div className="user-page-components">
                    Components
                </div>
            </div>
        </>
    )
}

export default UserPage