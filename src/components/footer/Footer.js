import React from 'react'
import { BsGithub } from "react-icons/bs";
import { AiOutlineYoutube} from 'react-icons/ai'
import { IconContext } from "react-icons";
import ContactUs from './ContactUs';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const [show, setShow] = React.useState(false)
    const navigate = useNavigate()
    return (
        <div id="footer-root-container">
            <div className="footer-group-1">
                <div className="footer-column">
                    <h2>BluePrint</h2>
                    <p>Copyright © BluePrint 2022</p>
                    <div className="footer-icon-row">
                        {show ? <ContactUs setShow={setShow}/> : <></>}
                        <div className='footer-icon' onClick={()=>window.open('https://github.com/2208-blueprint/BluePrint')}>
                            <IconContext.Provider value={{size: '40px'}}>
                                <BsGithub/>
                            </IconContext.Provider>
                        </div>
                        <div onClick={()=>setShow(!show)} className="footer-contact">Contact Us</div>
                        <div className='footer-icon' onClick={()=>window.open('https://www.youtube.com/watch?v=3z3kDrRu7rM&list=PLx0iOsdUOUmnMB_t8aLcctAYN-lXgZBUM&index=9')}>
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