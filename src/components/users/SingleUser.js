import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//This is to be used when mapping an array of Users to populate the AllUsersPage. It should be
//shorthand info about users to display on smaller card.

function SingleUser(props) {
    let id = props.user.id
    let numComponentsMade = props.user.components.length
    let userName = props.user.username
    console.log("props: ", props)

 

    return(
        
        <div>
            Username: {userName} <br/>
            ID: {id} <br/>
            Components made: {numComponentsMade}
        </div>
    )
}

export default SingleUser