import "./App.css";
import { Route, Routes } from "react-router-dom";

import Nav from "./Components/Navbar/Nav";
import Banner from "./Components/Bannner/Banner";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Resgister";
import Service from "./Components/Service/Service";
import About from "./Components/About/About";
import Adminhome from "./Components/AdminHome/AdminHome";
import Userhome from "./Components/UserHome/UserHome";
import Logout from "./Components/Logout/Logout";
import ManageUsers from "./Components/Manage Users/ManageUsers";
import EPAdmin from "./Components/EPAdmin/EPAdmin";
import CPAdmin from "./Components/CPAdmin/CPAdmin";
import Category from "./Components/Category/Category";
import SubCategory from "./Components/SubCategory/SubCategory";

function App() {
  return (
    <>
      <div id="root">
        
        <Nav />

        <Banner />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/admin" element={<Adminhome />}></Route>
          <Route path="/addcategory" element={<Category />}></Route>
          <Route path="/addsubcategory" element={<SubCategory/>}></Route>
          <Route path="/user" element={<Userhome />}></Route>
          <Route path="/manageusers" element={<ManageUsers />}></Route>
          <Route path="/epadmin" element={<EPAdmin />}></Route>
          <Route path="/cpadmin" element={<CPAdmin />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
