import React, { useState } from "react";
import Axios from "axios";

function UserPageComponentCard ({componentId}) {
    const [curComponent, setCurComponent] = useState('')
    async function getCurrentComponent() {
        try{
            let curComponent = await Axios.get(`/api/components/${componentId}`);
            setCurComponent('curComponent data: ', curComponent.data) 
        }
        catch(e) {
        console.error(e)
        }
    }
    getCurrentComponent()

    console.log(curComponent)

    return(
        <div className="single-user-page-component-card-container">
            <div className="single-user-page-component-card-name">
            Single Component Title
            </div>
            <div className="single-user-page-component-card-info">
                <div className="single-user-page-component-card-likes">
                    likes:
                </div>
                <div className="single-user-page-component-card-saves">
                    saves:
                </div>
            </div>
        </div>

    )
}

export default UserPageComponentCard