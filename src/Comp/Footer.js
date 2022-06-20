import './Footer.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer(){
    return <>
        <div className='bg'>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="row">
                            <div className='box-bleu col-md-1 mt-4'></div>
                            <div className='box-with col-md-3 mt-4'></div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h2 className='text-light chance text-center'>You only have one chance to make a first impression.</h2>
                        <h5 className='amazing mt-5 text-center'>Let’s make it an amazing one <img src="img/main-pic-5.png" alt="" width={55} /></h5>
                    </div>
                    <div className="col-md-3">
                        <div className='tot'>
                        <ul className="navbar-nav me-auto mb-2 ">
                            <li className="nav-item footer-list">
                                <Link to="/" className="text-decoration-none fs-4 text-light">Accueil <img src="img/main-pic-1.png" alt="" width={30} /></Link>
                            </li>
                            <li className="nav-item footer-list">
                                <Link to="/contact" className="text-decoration-none fs-4 text-light">Contact <img src="img/main-pic-1.png" alt="" width={30} /></Link>
                            </li>
                            <li className="nav-item footer-list">
                                <Link to="/blog" className="text-decoration-none fs-4 text-light">Blog <img src="img/main-pic-1.png" alt="" width={30} /></Link>
                            </li>
                            <li className="nav-item footer-list">
                                <Link to="/portfolio" className="text-decoration-none fs-4 text-light">Projects <img src="img/main-pic-1.png" alt="" width={30} /></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className='hr-footer'><hr /></div>
                <div className="row text-light mt-5">
                    <div className="col-md-9 copy">
                        <div className='ms-5 fs-5'>&copy; 2022, Omar Zekri</div>
                    </div>
                    <div className="col-md-3 back-to fs-5">
                        <a className='text-decoration-none text-light' href="#back">Back to top</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Footer;