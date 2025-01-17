import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return ( 
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
                      Why Choose Tender?
                    </h2>
                  </div>
                  <p>
                    With Tender, the Tendering process becomes straightforward. Whether you’re a vendor seeking growth or an organization looking for qualified partners, Tender offers a secure, fair, and efficient space to connect and collaborate. Join us and simplify your path to success.
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

export default Home;