import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//This is to be used when mapping an array of Users to populate the AllUsersPage. It should be
//shorthand info about users to display on smaller card.

function SingleUser(props) {
    let userComponents = props.user.components
    let value = props.user

    const navigate = useNavigate()

    function handleComponentClick(evt) {
        evt.preventDefault()
        navigate(`/components/${id}`)
    }

    return(
        
        <div>
            {userComponents && userComponents.map((component, i) =>
            <div key={i} value ={i + 1} id = {component.id} onClick = {handleComponentClick}>
            Component
            </div>
            )}
        </div>
    )
}

export default SingleUser