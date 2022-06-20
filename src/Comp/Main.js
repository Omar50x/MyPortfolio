import './Main.css';
import { useState } from "react";

function Main(){
    return <>
    <div className='ever'>
    <section className="container sec4 text-center">
            <div>
                <h2 className='fs-1 mb-5'>Everything you need for a perfect website</h2>
            </div>
            <div className="row web1">
                <div className="col-md-4 icon1 card py-4">
                    <div className="ico">
                    </div>
                    <div className='shadow'>
                        <h3 className='shadow'>Website Review</h3>
                        <p className='fs-4'>I make sure your website is performing its best by thoroughly reviewing it before making any changes.</p>
                    </div>
                </div>
                <div className="col-md-4 icon2">
                    <div className='shadow text-light'>
                        <h3 className='shadow'>Business Strategy</h3>
                        <p className='fs-4'>We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.</p>
                    </div>
                </div>
                <div className=" col-md-4 icon3 card py-4">
                    <div className='shadow'>
                        <h3 className='shadow'>User Experience Design</h3>
                        <p className='fs-4'>I design your website to be as easy to use as possible while guiding users towards the end goal.</p>
                    </div>
                </div>
            </div>
            <div className="row web2 mt-4">
                <div className="col-md-4 icon4">
                    <div className='shadow text-light'>
                        <h3 className='shadow'>Tailored Development</h3>
                        <p className='fs-4'>I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.</p>
                    </div>
                </div>
                <div className="col-md-4 icon5 card py-4">
                    <div className='shadow'>
                        <h3 className='shadow'>Rigorous Testing</h3>
                        <p className='fs-4'>I ensure your website is of excellent quality by thoroughly testing using multiple approaches.</p>
                    </div>
                </div>
                <div className="col-md-4 icon6">
                    <div className='shadow text-light'>
                        <h3 className='shadow'>Ongoing Support</h3>
                        <p className='fs-4'>Your website is always growing. Whether you’re adding new features or making improvements I’m here to help.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
}
export default Main;