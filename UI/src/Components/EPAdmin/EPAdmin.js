import './EPAdmin.css'
import { useState , useEffect } from 'react'
import { _userapiurl } from '../../APIUrl'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EPAdmin() {
    
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [mobile, setMobile] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [gender, setGender] = useState()
    const [ m , setM ] = useState();
    const [ f , setF ] = useState();

    useEffect(()=>{
        var condition_obj={"_id":localStorage.getItem("_id")};
        axios.get(_userapiurl+"fetch",{
            params : { condition_obj : condition_obj }
        }).then((response)=>{
            var userDetails=response.data.response_content[0];
            setName(userDetails.name); 
            setEmail(userDetails.email);
            setMobile(userDetails.mobile);
            setAddress(userDetails.address);
            setCity(userDetails.city);
            if(userDetails.gender==="male")
                setM("checked")
               else
                setF("checked")
        }).catch((error)=>{
            console.log(error);
        });    
      },[]);

      const handlesubmit=()=>{
        var update_details={"condition_obj":{"email":email} ,"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
        axios.patch(_userapiurl+"update",update_details).then((response)=>{
            alert("User profile edited successfully....");
            navigate("/epadmin");
        });
      };

    return ( 
      <>
          <div className="">
              <div className="detail-box2">
                  <div className="heading_container">
                      <h2>Edit Profile Panel</h2>
                      
                  </div>
                        <div id="register_form1">
                            <form>
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
              </div>
          </div> 
      </>
    );
  }
  
  export default EPAdmin;
  