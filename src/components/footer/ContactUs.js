import React from "react";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import {BsLinkedin} from 'react-icons/bs'
import { MdClose } from "react-icons/md";

const ContactUs = ({setShow}) => {
    return (
        <div className="footer-contact-pop">
            <div className="footer-contact-x" onClick={()=>setShow(false)}>
                <IconContext.Provider value={{size: '30px'}}>
                    <MdClose/>
                </IconContext.Provider>
            </div>
            <div className="footer-contact-individual">
                Thomas Bak 
                <a href="https://github.com/tombak98">
                    <IconContext.Provider value={{size: '40px'}}>
                        <BsGithub/>
                    </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/thomas-bak/">
                    <IconContext.Provider value={{size: '40px'}}>
                        <BsLinkedin/>
                    </IconContext.Provider>
                </a>
            </div>
            <div className="footer-contact-individual">
                Benjamin Lee
                <a href="https://github.com/benjaminglee">
                    <IconContext.Provider value={{size: '40px'}}>
                        <BsGithub/>
                    </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/benjamin-g-lee/">
                    <IconContext.Provider value={{size: '40px'}}>
                        <BsLinkedin/>
                    </IconContext.Provider>
                </a>
            </div>
            <div className="footer-contact-individual">
                Cathal O Cuinneagain
                <a href="https://github.com/cathal1990">
                    <IconContext.Provider value={{size: '40px'}}>
                        <BsGithub/>
                    </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/cathalocuinneagain/">
                    <IconContext.Provider value={{size: '40px'}}>
                        <BsLinkedin/>
                    </IconContext.Provider>
                </a>
            </div>
            <div className="footer-contact-individual">
                Alec Butterfield
                <a href="https://github.com/AB-Butterfield">
                    <IconContext.Provider value={{size: '40px'}}>
                        <BsGithub/>
                    </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/alec-butterfield/">
                    <IconContext.Provider value={{size: '40px'}}>
                        <BsLinkedin/>
                    </IconContext.Provider>
                </a>
            </div>
        </div>
    )
}

export default ContactUs