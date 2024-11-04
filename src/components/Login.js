import React from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';


function Login() {


    const [email, setemail] = useState();
    const [pass, setpass] = useState();

    const navi = useNavigate();

    // Set the active link in both state and localStorage
    function handleSetActiveLink(link){
        localStorage.setItem("activeLink", link);
    };

    // const { udata, setudata } = useContext(userContext)

    async function onlogin(e) {
        e.preventDefault()
        const logindata = { email, pass };
        try 
        {
            const resp = await axios.post("http://localhost:8000/api/login", logindata)
            if (resp.status === 200) 
            {
                if (resp.data.statuscode === 0) 
                {
                    toast.warn("Incorrect Email/Password")
                    cancel();
                }
                else 
                {
                    // setudata(resp.data.userdata)
                    // sessionStorage.setItem("userdata", JSON.stringify(resp.data.userdata));
                    // if (resp.data.userdata.usertype === "admin") {
                    //     navi("/adminhome")
                    // }
                    // else {
                    //     navi("/home")
                    // }
                    toast.success("Successfully Login")
                    navi("/")
                }
            }
            else 
            {
                alert("Some Problem Occured")
            }
        }
        catch (e) {
            toast.error(e.message)
        }
    }

    function cancel() {
        setemail("");
        setpass("")
    }



    return (
        <>
            <section className="inner-banner py-5">
                <div className="w3l-breadcrumb py-lg-5">
                    <div className="container pt-4 pb-sm-4">
                        <h4 className="inner-text-title pt-5">Login</h4>
                        <ul className="breadcrumbs-custom-path">
                            <Link to="/" classNameName="nav-link active" aria-current="page">Home</Link>
                            <li className="active"><i className="fas fa-angle-right"></i>Login</li>
                        </ul>
                    </div>
                </div>
            </section>

            

            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-6 mt-5">
                        <img src={`assets/images/sign.jpg`} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 text-center mt-5">

                        <h1 class="register-form-title ">Login Form</h1>

                        <form onSubmit={onlogin} class="register-form ">

                            <div class="input-container mt-5 ">

                                <input type="email" name="useremail" placeholder="" onChange={(e)=>setemail(e.target.value)} class="input-field" required />

                                <label class="input-label">
                                    <span><FontAwesomeIcon icon={faEnvelope} /></span><span>Email</span>
                                </label>

                            </div>

                            <div class="input-container mt-4 ">

                                <input type="password" name="userpass" placeholder="" onChange={(e)=>setpass(e.target.value)}class="input-field" required />

                                <label class="input-label">
                                    <span><FontAwesomeIcon icon={faLock} /></span><span>Password</span>
                                </label>

                            </div>

                            <input type="submit" className="register-button" value="Submit"/>
                            
                            <p className="register-text ">
                                Forgot your Password? <Link to="" className="login-link">Click Here</Link>
                            </p>
                            <p className="register-text ">
                                New Here? <Link to="/signup" className="login-link" onClick={() => handleSetActiveLink("signup")}>Sign Up</Link>
                            </p>

                        </form>

                    </div>
                </div>
            </div>

      <Footer/>

        </>
    )
}

export default Login
