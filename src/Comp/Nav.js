import { Link } from "react-router-dom";
import {BsLinkedin} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import { useState } from 'react'
function Nav(){
    const [activeNav, setActiveNav] = useState('#')
    return <>
            <nav id="back" className="navbar navbar-expand-lg py-1 shadow">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-5 nav-list">
                        <Link to="/" className="Acc text-decoration-none fs-4 nave">Accueil</Link>
                    </li>
                    <li className="nav-item mx-5">
                       <Link to="/contact" className="text-decoration-none fs-4 nave">Contact</Link>
                    </li>
                    <li className="nav-item mx-5">
                       <Link to="/blog" className="text-decoration-none fs-4 nave">Blog</Link>
                    </li>
                    <li className="nav-item mx-5">
                       <Link to="/portfolio" className="text-decoration-none fs-4 nave">Projects</Link>
                    </li>
                    <li className="nav-item logo">
                      <Link to ="/"><img src="img/logo.png" alt="" width="50"  className="LOGO"/></Link>  
                    </li>
                    <li className='resaux'>
                        <a href="https://www.linkedin.com/in/zekri-omar-0483b8235/" target="blank"><BsLinkedin className='fs-2 ico'/></a>
                    </li>
                    <li className="res1">
                        <a href="https://github.com/Omar50x" target="blank"><BsGithub className='fs-2 ico'/></a>
                    </li>
                    <li className="res1">
                        <a href="https://www.facebook.com/omar.zakri.56/" target="blank"><BsFacebook className='fs-2 ico'/></a>
                    </li>
                    <li className="res1">
                        <a href="https://www.instagram.com/zekri530/?hl=fr" target="blank"><BsInstagram className='fs-2 ico'/></a>
                    </li>
                    <li className="res1">
                        <a href="https://www.youtube.com/channel/UCovJM23WgKRdG-LwZl3Ukdw" target="blank"><BsYoutube className='fs-2 ico'/></a>
                    </li>
                </ul>
            </nav>
    </>
}
export default Nav;