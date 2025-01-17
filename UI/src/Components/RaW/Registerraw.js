
function Registerraw(){
  const [HeaderContent , setHeaderContent]=useState()
  useEffect(()=>{

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if(token!=undefined && role ==="admin"){

    }

    else if(token!=undefined && role ==="user"){
      
    }
    else{

    }
    
  },[])
    return(
        <>
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
                      Register Here cause
                    </h2>
                  </div>
                    <p>
                        We have a seamless, transparent platform connecting organizations with vendors, simplifying tender discovery, bidding, and securing opportunities.
                    </p>
                    <Link to = "/login">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Registerraw;
