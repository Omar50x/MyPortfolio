import './Header.css';
import { useState } from "react";
import Nav from './Nav';
import CV from '../assets/MyCv.pdf'

function Header(){
    const [btnHtml, setbtnHtml] = useState()
    function btnHtmlF(){
        setbtnHtml(
            !btnHtml
        )
    }
    return <>
        {
            btnHtml ?
            <div className="bg-img-header2">
            <Nav/>
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className='hello'>
                       <h1 className='text-light'>Hello, my name's Omar. I'm a Web Developer.</h1>
                    </div>
                    <img className='img6' src="img/figure-2.png" alt="" width="300px" />
                    <img className='img7' src="img/main-pic-7.png" alt="" width="300px" />
                    <img className='img8' src="img/main-pic-1.png" alt="" width="300px" />
                    <img className='img9' src="img/HTML5_logo_black.svg.png" alt="" width="150px" />
                    <img className='img10' src="img/CSS3_logo_and_wordmark.svg.png" alt="" width="104px" />
                    <img className='img11' src="img/JavaScript-Logo.png" alt="" width="250px" />
                    <img className='img12' src="img/React-icon.svg.png" alt="" width="250px" />
                    <img className='img13' src="img/jquery-icon-19.jpg" alt="" width="250px" />
                    <img className='img14' src="img/Bootstrap_logo.svg.png" alt="" width="80px" />
                    <div className='cv'>
                        <h2>My Cv</h2>
                    </div>
                    <div>
                        <img className='doig' src="img/32437.png" alt="" width="80px" />
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img2' src="img/IMG_9977 (1)-removebg-preview.jpg" alt="" />
                    <img className='img1' src="img/main-pic-6.png" alt="" />
                    <img className='img3' src="img/main-pic-2.png" alt="" width="300px" />
                    <img className='img4' src="img/main-pic-4.png" alt="" width="300px" />
                    <button onClick={btnHtmlF} className='img5'><img src="img/main-pic-5.png" alt="" width="70px" /></button>
                    <div>
                        <a href="https://omar50x.github.io/Cv/" target="blank"><img className='cv-img' src="img/cv.jpg" alt="" width="100"/></a>
                    </div>
                    
                </div>
                <div className='btn-container'>
                    <a href={CV} download className='btn-cv fs-3'>Download CV</a>
                </div>
            </div>
        </div>
        </div>:
        <div className="bg-img-header">
        <Nav/>
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className='hello'>
                   <h1>Hello, my name's Omar. I'm a Web Developer.</h1>
                </div>
                <img className='img6' src="img/figure-2.png" alt="" width="300px" />
                <img className='img7' src="img/main-pic-7.png" alt="" width="300px" />
                <img className='img8' src="img/main-pic-1.png" alt="" width="300px" />
                <img className='img9' src="img/HTML5_logo_black.svg.png" alt="" width="150px" />
                <img className='img10' src="img/CSS3_logo_and_wordmark.svg.png" alt="" width="104px" />
                <img className='img11' src="img/JavaScript-Logo.png" alt="" width="250px" />
                <img className='img12' src="img/React-icon.svg.png" alt="" width="250px" />
                <img className='img13' src="img/جي كويري.png" alt="" width="250px" />
                <img className='img14' src="img/Bootstrap_logo.svg.png" alt="" width="80px" />
                <div className='cv'>
                    <h2>My Cv</h2>
                </div>
                <div>
                    <img className='doig' src="img/32437.png" alt="" width="80px" />
                </div>
            </div>
            <div className="col-md-6">
                <img className='img2' src="img/IMG_9977 (1)-removebg-preview.jpg" alt="" />
                <img className='img1' src="img/main-pic-6.png" alt="" />
                <img className='img3' src="img/main-pic-2.png" alt="" width="300px" />
                <img className='img4' src="img/main-pic-4.png" alt="" width="300px" />
                <button onClick={btnHtmlF} className='img5'><img src="img/main-pic-5.png" alt="" width="70px" /></button>
                <div>
                    <a href="https://omar50x.github.io/Cv/" target="blank"><img className='cv-img' src="img/cv.jpg" alt="" width="100"/></a>
                </div>
            </div>
            <div className='btn-container'>
                <a href={CV} download className='btn-cv fs-3'>Download CV</a>
            </div>
        </div>
    </div>
    </div>
        }
        
    </>
}
export default Header;