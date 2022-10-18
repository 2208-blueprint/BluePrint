import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import UserPageComponentCard from "./UserPageComponentCard";
import ComponentCard from "../MainPage/ComponentCard";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

//This is the full "profile page" of a user. The logged-in user can visit this page to see components made by this
//user, as well as follow the user to see more content from them.

function UserPage() {

    let navigate = useNavigate()
    const [curUser, setCurUser] = useState('')
    const [rank, setRank] = useState("");
    const [rankColor, setRankColor] = useState("");
    const [points, setPoints] = useState(0)
    const [totalFavs, setTotalFavs] = useState(0);
    const [totalSaves, setTotalSaves] = useState(0);
    const [searchBarInput, setSearchBarInput] = useState("");
    
    //Get current user number from URL path
    let curUserNum = window.location.pathname
    curUserNum = curUserNum.slice(7, curUserNum.length)

    React.useEffect(() => {

        async function getCurrentUser() {
            try{
                if (curUserNum) {
            
                const { data } = await Axios.get(`/api/users/${curUserNum}`);
                setCurUser(data) 
                console.log('First data: ',data)

                if (data.highestRank >= 1000) {
                    setRank("Chief");
                    setRankColor("#FDFDBE");
                  } else if (data.highestRank >= 500) {
                    setRank("Engineer");
                    setRankColor("#82EEE8");
                  } else if (data.highestRank >= 200) {
                    setRank("Architect");
                    setRankColor("#FFD700");
                  } else if (data.highestRank >= 100) {
                    setRank("Artisan");
                    setRankColor("#C0C0C0");
                  } else {
                    setRank("Apprentice");
                    setRankColor("#CD7F32");
                  }
            
                console.log('Data: ', data)
                
                }
            }
            catch(e) {
            console.error(e)
            }
        }
        getCurrentUser() 

        // if (!points){
        //     setPoints(curUser.points)
        // }
        
    },[])

    React.useEffect(() => {
        async function getComponentSavesAndFavs() {
            try {

            // if (curUser) {
            
            const {data}  = await axios.get("/api/components")
            console.log('Get Components Data: ', data);
            console.log('First Component: ', data[0].users[0].username)
            console.log('curUser.username: ', curUser)
              const userComponents = data.filter(component => 
                (component.users[0].username) === curUser?.username);
                console.log('get Component Saves and Favs: ',userComponents)
            //   }
            } catch(e) {
                console.error(e)
            }

            
            //   parsedData.push({
            //     id: user.id,
            //     username: user.username,
            //     componentCount,
            //     followerCount,
            //     points: user.currentPoints,
            //   });
            
            // setTopUsers(parsedData);
          };
        getComponentSavesAndFavs()
    },[])



    console.log('Cur user: ', curUser)
    
    

    let componentsArray = curUser?.components
  
    function handleMessageMeButton(evt){
        evt.preventDefault()
    }

    const handleSearch = () => {
        if (searchBarInput === "") {
          return;
        }
        let keywords = searchBarInput.split(" ").join("+");
        setSearchBarInput("");
        navigate(`/components/search/${keywords}`);
      };

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
                    <span>Followers: {curUser?.followers?.length}</span>
                    <span>Total Favorites:</span>
                    <span>Total Saves:</span>
                    <span>Bluepoints: {points}</span>
                </div>
            </div>
            <div className="single-user-page-search-container">
                <input
                    type="text"
                    className="side-bar-container-searchbar"
                    placeholder="SEARCH COMPONENTS"
                    onChange={(e) => {
                        setSearchBarInput(e.target.value);
                    }}
                    />
                    <div className="side-bar-search-button" onClick={handleSearch}>
                        {" "}
                        <IconContext.Provider value={{ size: "20px" }}>
                            <BsSearch />
                        </IconContext.Provider>
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
                )}
            </div>           
        </div>
        </>
    )
}

export default UserPage