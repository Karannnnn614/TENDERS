import './Header.css';
import { useState, useEffect } from 'react';

function Header() {

  const [HeaderContent , setHeaderContent]  =useState()

  useEffect(()=>{
    
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if(token!==undefined&&role==="admin"){
      <div class="header">
        <p>Info@gmail.com</p>
          <div id="header-right">
            <p>FAQs</p>
            <p>Support</p>
            <p>Policy</p>
          </div>
        </div>

    }
    else if(token!==undefined&&role==="user"){
      <div class="header">
        <p>Info@gmail.com</p>
          <div id="header-right">
            <p>FAQs</p>
            <p>Support</p>
            <p>Policy</p>
          </div>
        </div>
      
    }
    else
      <div class="header">
        <p>info@gmail.com</p>
          <div id="header-right">
            <p>FAQs</p>
            <p>Support</p>
            <p>Policy</p>
          </div>
        </div>
     }
    )

  return ( 
    <>
      {HeaderContent}
    </>
  );
}

export default Header;
