import "./CPAdmin.css"
import { useState } from "react"
import { _userapiurl } from "../../APIUrl"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CPAdmin() {

  const navigate = useNavigate()
  const [output, setOutput] = useState()
  const [opass, setOldPassword] = useState()
  const [npass, setNewPassword] = useState()
  const [cnpass, setConfirmNewPassword] = useState()

  const handlesubmit = () => {
    var condition_obj = {
      email: localStorage.getItem("email"),
      password: opass,
    };
    axios
      .get(_userapiurl + "fetch", {
        params: { condition_obj: condition_obj },
      })
      .then((response) => {
        if (npass === cnpass) {
          var update_details = {
            condition_obj: { email: localStorage.getItem("email") },
            content_obj: { password: cnpass },
          };
          axios
            .patch(_userapiurl + "update", update_details)
            .then((response) => {
              alert("Profile password edited successfully....");
              navigate("/cpadmin");
              setOldPassword("");
              setNewPassword("");
              setConfirmNewPassword("");
            });
        } else {
          setOutput("New & confirm new password mismatch....");
          setNewPassword("");
          setConfirmNewPassword("");
        }
      })
      .catch((error) => {
        setOutput("Invalid old password please try again....");
        setOldPassword("");
      });
  };

  return (
    <>
      <div className="">
        <div className="detail-box2">
          <div className="heading_container">
            <h2>Change Password </h2>
          </div>
          <div id="register_form1">
            <form>
              <div class="form-group">
                <label for="opass">Old Password:</label>
                <input
                  type="password"
                  class="form-control"
                  value={opass}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <br />
              <div class="form-group">
                <label for="npass">New Password:</label>
                <input
                  type="password"
                  class="form-control"
                  value={npass}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <br />
              <div class="form-group">
                <label for="cnpass">Confirm New Password:</label>
                <input
                  type="password"
                  class="form-control"
                  value={cnpass}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>
              <br />
              <button
                type="button"
                class="btn btn-success"
                onClick={() => handlesubmit()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CPAdmin;
