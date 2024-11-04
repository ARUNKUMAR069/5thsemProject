import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Signup from './Signup';
import Login from "./Login";
import Contact from "./Contact";
import Adminpanel from "./Adminpanel";
import User from "./admin/User";
import UpdateUser from "./admin/UpdateUser"; 
import About from "./About";
function Siteroutes()
{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/users" element={<User/>}/>
                <Route path="/updateuser" element={<UpdateUser/>}/>
                <Route path="/adminpanel" element={<Adminpanel/>}/>

            </Routes>
        </>
    )
}
export default Siteroutes;