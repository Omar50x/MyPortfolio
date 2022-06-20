import './Projects.css';
import Footer from "./Footer";
import Nav from "./Nav";

function Projects(){
    return <>
        <div className="bg-nav">
           <Nav/>
        </div>
        <div className='projects'>
           <div className="container">
           <div className="row my-5">
              <div className="col-md-6 mt-5">
                <div className="row">
                  <div className="col-md-1">
                    <hr className='hr-contact' />
                  </div>
                  <div className="col-md-4">
                    <h4 className='say-hello'>My Projects <img src="img/main-pic-1.png" alt="" width={30} /></h4>
                  </div>
                </div>
                <div>
                  <h2 className='lets-work'>Look at My Projects.</h2>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src="img/2un9.gif" alt="" width="350" />
              </div>
            </div>
            <div className="row my-5 shadow">
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Fish/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href=" https://omar50x.github.io/Fish/" target="blank"><button className="btn-fish">Fish</button></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Green-office/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href="https://omar50x.github.io/Green-office/" target="blank"><button className="btn-green">Green Office</button></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Demo2/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href="https://omar50x.github.io/Demo2/" target="blank"><button className="btn-demo">Demo</button></a>
                    </div>
                </div>
            </div>
            <div className="row my-5 shadow">
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Portfolio/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href="https://omar50x.github.io/Portfolio/" target="blank"><button className="btn-portfolio">Portfolio</button></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Dan/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href="https://omar50x.github.io/Dan/" target="blank"><button className="btn-dan">Dan</button></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Bootcamp/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href="https://omar50x.github.io/Bootcamp/" target="blank"><button className="btn-bootcamp">Bootcamp</button></a>
                    </div>
                </div>
            </div>
            <div className="row my-5 shadow">
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Netflix/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href="https://omar50x.github.io/Netflix/" target="blank"><button className="btn-portfolio text-light bg-dark">Netflix</button></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Trello/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href="https://omar50x.github.io/Trello/" target="blank"><button className="btn-trello">Trello</button></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="shadow p-2 rounded">
                        <iframe src="https://omar50x.github.io/Zero/" frameborder="0" width={400} height={600}></iframe>
                    </div>
                    <div className="text-center mt-3 shadow p-2 rounded">
                        <a href="https://omar50x.github.io/Zero/" target="blank"><button className="btn-zero">Zero</button></a>
                    </div>
                </div>
            </div>
           </div>
           </div>
           <Footer/>
    </>
}
export default Projects;