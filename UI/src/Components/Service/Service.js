import './Service.js'
import { Link } from 'react-router-dom';

function Service(){
    return(
        <>
        {/* about section */}
        <section className="about_section layout_padding long_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <img src="assets/images/banner_about-removebg-preview (1).png" alt=""/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>
                      Services we provide...!
                    </h2>
                  </div>
                    <p>
                        Welcome to TENDIFY – a seamless, transparent platform connecting organizations with vendors, simplifying tender discovery, bidding, and securing opportunities.
                    </p>
                    <Link to = "/login">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* end about section */}
        </>
    );
}

export default Service;
