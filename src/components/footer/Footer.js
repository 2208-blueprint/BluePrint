import React from 'react'
import { BsGithub } from "react-icons/bs";
import { AiOutlineYoutube} from 'react-icons/ai'
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <div id="footer-root-container">
            <div className="footer-group-1">
                <div className="footer-column">
                    <h2>BluePrint</h2>
                    <p>Copyright © BluePrint 2022</p>
                    <div className="footer-icon-row">
                        <div className='footer-icon'>
                            <IconContext.Provider value={{size: '40px'}}>
                                <BsGithub/>
                            </IconContext.Provider>
                        </div>
                        <a href="/">Contact Us</a>
                        <div className='footer-icon'>
                            <IconContext.Provider value={{size: '40px'}}>
                                <AiOutlineYoutube/>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer