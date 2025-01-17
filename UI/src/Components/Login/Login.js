import './Login.css'
import { _userapiurl } from '../../APIUrl'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login(){

  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [output, setOutput] = useState()

  const handlesubmit=()=>{

    const userDetails={"email":email,"password":password};
      axios.post(_userapiurl+"login",userDetails).then((response)=>{

        const obj = response.data
        const user = obj.user
        localStorage.setItem("token",obj.token)
        localStorage.setItem("_id",user._id) 
        localStorage.setItem("name",user.name)
        localStorage.setItem("email",user.email)
        localStorage.setItem("mobile",user.mobile)
        localStorage.setItem("address",user.address)
        localStorage.setItem("city",user.city)
        localStorage.setItem("gender",user.gender)
        localStorage.setItem("info",user.info)
        localStorage.setItem("role",user.role)
        
        setOutput("successfully login")
        user.role === "admin" ? navigate("/admin") : navigate("/user")

        }).catch((error)=>{
          setOutput("Invail User or Please verify your account... ")
          // setEmail("")
          // setPassword("")    
        });
      };

    return(
        <>
        <div className="long_section12">
          {/* <div className="container"> */}
            {/* <div className="row"> */}
              {/* <div className="col-md-6"> */}
                <div className="detail-box1">
                  <div className="heading_container">
                    <h2>
                    "Log In to Access Your Opportunities"</h2>
                  </div>
                    <p>
                        We have a seamless, transparent platform connecting organizations with vendors, simplifying tender discovery, bidding, and securing opportunities.
                    </p>
                    <div id="login_form">
                      <form>
                        <font color = "blue" style={{"font-size":"19px"}}>{output}</font>
                        <div class="form-group">
                          <label for="email" >Email address:</label>
                          <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div class="form-group">
                          <label for="pwd">Password:</label>
                          <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="button" class="btn btn-success" style={{"font-size":"19px"}} onClick={()=>{handlesubmit()}}>Submit</button>
                        <br/>
                        <br/>
                      </form>
                      </div>
                </div>
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
        </>
    )
  }

export default Login
