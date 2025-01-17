
import './Nav.css';
import { Link, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from '../Authentication/Auth';

function Nav() {

  const [NavContent , setNavContent]=useState()
  const [logedin ,setLogedin]=useState(null)
  const [role , setRole]=useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  

  const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('_id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')	  
    localStorage.removeItem('mobile')
    localStorage.removeItem('address')
    localStorage.removeItem('city')
    localStorage.removeItem('gender')
    localStorage.removeItem('role')
    localStorage.removeItem('info')
    setLogedin(false)
  }
  
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      setLogedin(true)
    }
    const role = localStorage.getItem("role")
    if(role){
      setRole(role)
    }
  },[location.pathname]
  )
  useEffect(()=>{
    if(!logedin)
    navigate('/')
  },[logedin])

  return ( 
    <>
    <Auth />

    <header className="header_section long_section px-0">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>
                    Tender
                  </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                    {!logedin&&<ul className="navbar-nav  ">
                      <li className="nav-item active">
                        <a className="nav-link" href=""><Link to = "/">Home</Link><span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href=""><Link to = "/about">About</Link></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href=""><Link to = "/contact">Contact</Link></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href=""><Link to = "/service">Service</Link></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="" ><Link to = "/register">Register</Link></a>
                      </li>
                    </ul>}
                    {logedin&&role==="admin"&&<ul className="navbar-nav  ">
                      <li className="nav-item active">
                        <a className="nav-link"><Link to = "/admin">Admin Home</Link><span className="sr-only">(current)</span></a>
                      </li>
                      <div class="nav-item dropdown">
                            <a  class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Category</a>
                            <div class="dropdown-menu m-0">
                                <a class="dropdown-item"><Link to = "/addcategory">Category Panel</Link></a>
                                <a class="dropdown-item"><Link to = "/addsubcategory">Sub-Category Panel</Link></a>
                            </div>
                            </div>
                      <li className="nav-item active">
                        <a className="nav-link"><Link to = "/manageusers">Manage Users</Link><span className="sr-only">(current)</span></a>
                      </li>
                      <div class="nav-item dropdown">
                            <a  class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
                            <div class="dropdown-menu m-0">
                                <a class="dropdown-item"><Link to = "/epadmin">Edit Profile</Link></a>
                                <a class="dropdown-item"><Link to = "/cpadmin">Change Password</Link></a>
                            </div>
                        </div>
                    </ul>}
                    {logedin&&role==="user"&&<ul className="navbar-nav  ">
                      <li className="nav-item active">
                        <a className="nav-link" href=""><Link to = "/user">User Home</Link><span className="sr-only">(current)</span></a>
                      </li>
                    </ul>}
                  </div>
                  <div className="quote_btn-container">
                    {logedin?<div className="nav-link" >
                      <span onClick={logout} >
                      Logout
                      </span>
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </div>:<div className="nav-link" >
                      <span>
                      <Link to = "/login">Login</Link>
                      </span>
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </div>}
                    
                  </div>
                  </div>
                
              </nav>
            </header>
    
    </>
  );
}

export default Nav;