import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    // Check if accessing admin routes without admin privileges
    if (
      ["/admin", "/manageusers", "/epadmin", "/cpadmin", "/addcategory", "/addsubcategory"].includes(path)
    ) {
      if (!token || role !== "user") {
        navigate("/login");
      }
    } 
    // Check if accessing user route without user privileges
    else if (path === "/user") {
      if (!token || role !== "user") {
        navigate("/login");
      }
    } 
    // Redirect based on user role to default home page
    else {
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "user") {
        navigate("/user");
      }
    }
  }, [window.location.pathname, navigate]);

  return null;
}

export default Auth;
