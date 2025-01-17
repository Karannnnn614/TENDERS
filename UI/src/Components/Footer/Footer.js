import './Footer.css';
import { useEffect, useState } from 'react';

function Footer() {
  const [FooterContent, setFooterContent] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Show footer only if there is no token (visitor page)
    if (!token) {
      setFooterContent(
        <>
          {/* Info section */}
          <section className="info_section long_section">
            <div className="container">
              <div className="contact_nav">
                <a href="tel:XXXXXX">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call: XXXX XX XXXX</span>
                </a>
                <a href="mailto:workwithkaran614@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Email: workwithkaran614@gmail.com</span>
                </a>
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
              </div>
            </div>
          </section>
          {/* End info_section */}

        </>
      );
    }
  },[]);

  return(
  <>

  {FooterContent}
  
  {/* footer section */}
  <footer className="footer_section">
         <div className="container">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By Karan
            </p>
          </div>
       </footer>
      {/* footer section */}
      </>
  )
}

export default Footer;
