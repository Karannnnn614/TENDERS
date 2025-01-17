import './Banner.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Banner() {
  const [BannerContent, setBannerContent] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // Only show banner if token and role are undefined (visitor panel)
    if (!token && !role) {
      setBannerContent(
        <>
        {/* slider section */} 
        <section className="slider_section long_section">
              <div id="customCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="detail-box">
                            <h1>
                              Unlock New Opportunities <br/>
                              with Tender
                            </h1>
                            <p>
                              Welcome to Tender – your trusted platform for seamless, transparent Tendering. Discover public and private Tenders, submit bids, and grow your business effortlessly. Connecting organizations and vendors, Tender ensures fair opportunities and simplifies bidding. Start exploring now and seize every opportunity!
                            </p>
                            <div className="btn-box">
                              <a  href ="" className="btn1">
                                Explore Tenders
                              </a>
                              <a className="btn2">
                              <Link to = "/register">Sign Up</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="img-box">
                            <img src="assets/images/banner_1-removebg-preview.png" height="575px" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="detail-box">
                            <h1>
                              Connect Bid Grow<br/>
                              Tender
                            </h1>
                            <p>
                              Experience Tendering made easy with Tender – the platform that brings opportunities right to you. Join a community of vendors and organizations committed to transparent, efficient bidding.
                            </p>
                            <div className="btn-box">
                              <a href ="" className="btn1">
                                Sign Up Now
                              </a>
                              <a  className="btn2">
                                <Link to = "/login">Post a Tender</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="img-box">
                            <img src="assets/images/6983291.jpg" height="575px" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="detail-box">
                            <h1>
                              Seamless Tendering Awaits Tender
                            </h1>
                            <p>
                              Unlock your business potential on Tender – bid on the latest Tenders with ease, connect with top clients, and secure projects that drive growth. Don’t miss out, start bidding today!
                            </p>
                            <div className="btn-box">
                              <a href="" className="btn1">
                                Explore Tenders
                              </a>
                              <a href="" className="btn2">
                              <Link to = "/login">Sign Up</Link>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="img-box">
                            <img src="assets/images/banner_1-removebg-preview.png" height="575px" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ol className="carousel-indicators">
                  <li data-target="#customCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#customCarousel" data-slide-to="1"></li>
                  <li data-target="#customCarousel" data-slide-to="2"></li>
                </ol>
              </div>
            </section>
        </>
      );
    } else {
      setBannerContent(
        <>
        </>
      ); // Hide banner for logged-in users (admin or regular user)
    }
  },[]);

  return <>{BannerContent}</>;
}

export default Banner;
