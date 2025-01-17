import './ManageUsers.css'
import { useState , useEffect } from 'react'
import { _userapiurl } from '../../APIUrl'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManageUsers() {
    
    const navigate = useNavigate();  
    const [ users , setUserDetails ] = useState([]);

    useEffect(()=>{
        var condition_obj={"role":"user"};
        axios.get(_userapiurl+"fetch",{
            params : { condition_obj : condition_obj }
        }).then((response)=>{
            //console.log(response.data);
            setUserDetails(response.data.response_content);
        }).catch((error)=>{
            console.log(error);
        });    
      });

      const changestatususer=(_id,s)=>{
        if(s==="verify")
        {
          let update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":1}};
          axios.patch(_userapiurl+"update",update_details).then((response)=>{
              alert("User verified successfully....");
              navigate("/manageusers");
          });
        }
        else if(s==="block")
        {
          let update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":0}};
          axios.patch(_userapiurl+"update",update_details).then((response)=>{
              alert("User blocked successfully....");
              navigate("/manageusers");
          });
        }    
        else
        {
          var delete_details={"data":{"condition_obj":{"_id":_id}}};
          axios.delete(_userapiurl+"delete",delete_details).then((response)=>{
              alert("User deleted successfully....");
              navigate("/manageusers");
          });
        }
      };

  return ( 
    <>
        <div className="long_section12">
            <div className="detail-box1">
                <div className="heading_container">
                    <h2> View & Manage Users</h2>
                </div>
                <h2>User Information</h2>
                  <table>
                    <tr>
                      <th>UserID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>Gender</th>
                      <th>Status</th>
                      <th class="action">Action</th>
                    </tr>
                    
                    {
                      users.map((row)=>(
                        <tr>
                          <td>{row._id}</td>
                          <td>{row.name}</td>    
                          <td>{row.email}</td>
                          <td>{row.mobile}</td>
                          <td>{row.address}</td>
                          <td>{row.city}</td>
                          <td>{row.gender}</td>
                          <td>{row.status===1?<font color="green">Verified</font>:<font color="red">Blocked</font>}</td>
                          <td class="action">
                          <span onClick={() => changestatususer(row._id, row.status === 1 ? 'block' : 'verify')} style={{ color: 'blue', cursor: 'pointer' }}>
                          <button class="status-button">Change Status</button>
                          </span>
                          <br />
                          <span onClick={() => changestatususer(row._id, 'delete')} style={{ color: 'red', cursor: 'pointer' }}>
                          <button class="delete-button">Delete</button>
                          </span>
                          </td> 
                        </tr>
                      ))
                    }                  
                  </table>
            </div>
        </div> 
    </>
  );
}

export default ManageUsers;
