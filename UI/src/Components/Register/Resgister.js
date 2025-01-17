import './Register.css'
import { useState } from 'react';
import { _userapiurl } from '../../APIUrl';
import axios from 'axios';

function Register(){

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [mobile, setMobile] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [gender, setGender] = useState()
  const [output, setOutput] = useState()

  const handlesubmit=()=>{

    const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};

    axios.post(_userapiurl+"save",userDetails).then((response)=>{
        setOutput("User register successfully....");
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
      }).catch((error)=>{
         setOutput("User registration failed....");  
        //  console.log(error)  
       });
    };

  return(
    <>
      <div id="register_form">
      <form>
        <h1>Register Here </h1>
        <font color = "blue" style={{"font-size":"19px"}}>{output}</font>
        <div class="form-group">
          <br/>
          <label for="name" >Name:</label>
          <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="email" >Email address:</label>
          <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
        </div> 
        <div class="form-group">
          <label for="mobile" >Mobile No.</label>
          <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="address" >Address</label>
          <textarea type="text" class="form-control" value={address} onChange={e => setAddress(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="city" >City</label>
          <select type="text" class="form-control" value={city} onChange={e => setCity(e.target.value)}>
            <option>Select City</option>
            <option>Indore</option>
            <option>Ujjain</option>
            <option>Bhopal</option>
            <option>Gwalior</option>
            </select>
        </div>
        <div class="form-group" style={{"padding":""}}>
          <label for="gender">Gender:  </label>  &nbsp;   
          Male &nbsp;<input type="radio" value="Male" name="gender"  onChange={e => setGender(e.target.value)}/> &nbsp;
          Female &nbsp;<input type="radio" value="Female"  name="gender" onChange={e => setGender(e.target.value)} />
        </div>
        <button type="button" class="btn btn-success" style={{"font-size":"19px"}} onClick={()=>{handlesubmit()}}>Submit</button>
        <br/>
        <br/>
      </form>
      </div>
    </>
  )
}
export default Register;
