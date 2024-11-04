import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faListOl } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Footer from "./Footer";


function Signup() {

    const [name, setname] = useState();
    const [phone, setphone] = useState();
    const [email, setemail] = useState();
    const [rollno, setrollno] = useState();
    const [pass, setpass] = useState();
    const [cpass, setcpass] = useState();
    const [sem, setsem] = useState();
    const [dep, setdep] = useState();
    const [terms, setterms] = useState();
    const navi = useNavigate()

        // Set the active link in both state and localStorage
        function handleSetActiveLink(link){
        localStorage.setItem("activeLink", link);
    };

 

    async function onsignup(e) 
    {
        e.preventDefault()

        if (terms === true) 
        {
            if (pass === cpass) 
            {
                const reqdata = { name, phone, email, rollno, pass, sem, dep }
                try 
                {
                    const resp = await axios.post("http://localhost:8000/api/signup", reqdata)
                    if (resp.status === 200) {
                        if (resp.data.statuscode === 1) {
                            toast.success("U have successfully SignUp")
                            navi("/login")
                            handleSetActiveLink("login")
                        }
                        else if (resp.data.statuscode === 0) {
                            toast.warning(resp.data.msg)
                        }
                    }
                    else {
                        toast.warn("Some Problem Occured")
                    }
                }
                catch (err) {
                    toast.error(err.message)
                }
            }
            else {
                toast.error("Password Doesnot Match")
            }
        }
        else {
            toast.warn("Please accept terms and condition")
        }
    }

    return (
        <>
            <section className="inner-banner py-5">
                <div className="w3l-breadcrumb py-lg-5">
                    <div className="container pt-4 pb-sm-4">
                        <h4 className="inner-text-title pt-5">Sign-Up</h4>
                        <ul className="breadcrumbs-custom-path">
                            <Link to="/" classNameName="nav-link active" aria-current="page">Home</Link>
                            <li className="active"><i className="fas fa-angle-right"></i>Sign-Up</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-6 mt-5">
                        <img src={`assets/images/sign.jpg`} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 text-center ">

                        <h1 className="register-form-title mt-5">Register Form</h1>

                        <form name="form1" onSubmit={onsignup} className="register-form" >

  
                            <div className="input-row mt-5">
                                <div className="input-container col">
                                    <input type="text" name="username" placeholder="" className="input-field" onChange={(e)=>setname(e.target.value)}  required />
                                    <label className="input-label">
                                        <span><FontAwesomeIcon icon={faUser} /></span><span>Username</span>
                                    </label>
                                </div>

                                <div className="input-container col">
                                    <input type="number" name="userrollno" placeholder="" className="input-field" onChange={(e)=>setrollno(e.target.value)}required />
                                    <label className="input-label">
                                        <span><FontAwesomeIcon icon={faMobile} /></span><span>Roll No.</span>
                                    </label>
                                </div>
                            </div>

                            <div className="select-container mt-4">
                                <select
                                    name="department"
                                    className="select-box"
                                    required
                                    onChange={(e)=>setdep(e.target.value)}
                                >
                                    <option value="">Choose Department</option>
                                    <option value="B.Tech Computer Science Engineering">B.Tech Computer Science Engineering</option>
                                    <option value="B.Tech Electronics and Communication Engineering">B.Tech Electronics and Communication Engineering</option>
                                    <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
                                </select>

                                <label className="select-label">
                                    <span><FontAwesomeIcon icon={faBuilding} /></span><span>Department</span>
                                </label>
                            </div>

                            <div className="input-row mt-4">
                                <div className="select-container col">
                                    <select
                                        name="Semester"
                                        className="select-box"
                                        required
                                        onChange={(e)=>setsem(e.target.value)}
                                    >
                                        <option value="">Choose Semester</option>      
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                    <label className="select-label">
                                        <span><FontAwesomeIcon icon={faListOl} /></span><span>Semester</span>
                                    </label>
                                </div>

                                <div className="input-container col">
                                    <input type="tel" name="usernumber" placeholder="" className="input-field" onChange={(e)=>setphone(e.target.value)} required minLength="10" maxLength="10"/>

                                    <label className="input-label">
                                        <span><FontAwesomeIcon icon={faPhone} /></span><span>Phone</span>
                                    </label>
                                </div>
                            </div>

                            <div className="input-container mt-4 ">

                                <input type="email" name="useremail" placeholder="" className="input-field" onChange={(e)=>setemail(e.target.value)}required />

                                <label className="input-label">
                                    <span><FontAwesomeIcon icon={faEnvelope} /></span><span>Email</span>
                                </label>

                            </div>

                            <div className="input-container mt-4 ">

                                <input type="password" name="password" placeholder="" className="input-field" onChange={(e)=>setpass(e.target.value)}required  />
                                {/* pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" */}

                                <label className="input-label">
                                    <span><FontAwesomeIcon icon={faLock} /></span><span>Password</span>
                                </label>

                            </div>
                            <div className="input-container mt-4 ">

                                <input type="password" name="confirmpass" placeholder="" className="input-field" onChange={(e)=>setcpass(e.target.value)}required />

                                <label className="input-label">
                                    <span><FontAwesomeIcon icon={faLock} /></span><span>Confirm Password</span>
                                </label>

                            </div>
                            <label className="checkbox mt-4">
                                <input type="checkbox" name="cbx1" onChange={(e) => setterms(e.target.checked)} /><i> </i>I accept the terms and conditions
                            </label>
                            <input type="submit" className="register-button" value="Submit"/>

                            <div className="social-login">
                                <p>Login with social</p>
                                <div className="social-icons">
    
                                    <div>
                                    
                                    </div>
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-google"></i>
                                </div>
                            </div>
                            <p className="register-text">
                                Already registered? <Link to="/login" className="login-link" onClick={() => handleSetActiveLink("login")}>Login</Link>
                            </p>      

                        </form>

                    </div>
                </div>
            </div>
      <Footer/>

        </>
    )
}
export default Signup;




