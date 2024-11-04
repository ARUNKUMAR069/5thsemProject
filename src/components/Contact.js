import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Footer from './Footer';


function Contact() {

    const[name , setname] = useState()
    const[email , setemail] = useState()
    const[subject , setsubject] = useState()
    const[message , setmessage] = useState()

    async function oncontact(e)
    {
        e.preventDefault()
        const data = {name , email , subject , message}
        try
        {
            const resp = await axios.post("http://localhost:8000/api/contact" , data)
            if(resp.status===200)
            {
                if(resp.data.statuscode===1)
                {
                    toast.success("Your Query is Submitted")
                }
                else if(resp.data.statuscode===0)
                {
                    toast.warning(resp.data.msg)
                }
            }
            else
            {
                toast.warn("Some Problem Occured")
            }
        }
        catch(e)
        {
            toast.error(e.message)
        }
    }


  return (
    <>
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-4 pb-sm-4">
                <h4 className="inner-text-title pt-5">Contact Us</h4>
                <ul className="breadcrumbs-custom-path">
                    <li><a href="index.html">Home</a></li>
                    <li className="active"><i className="fas fa-angle-right"></i>Contact Us</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="w3l-contact py-5" id="contact">
        <div className="container py-md-5 py-4">
            <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '500px' }}>
                <p className="text-uppercase">Get In Touch</p>
                <h3 className="title-style">Contact Us</h3>
            </div>
            <div className="row contact-block">
                <div className="col-md-7 contact-right">
                    <form  className="signin-form" onSubmit={oncontact}>
                        <div className="input-grids">
    
                            <input type="text" name="w3lName" id="w3lName" placeholder="Your Name"
                                        className="contact-input" required onChange={(e)=>setname(e.target.value)}/>

                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email"
                                        className="contact-input" required onChange={(e)=>setemail(e.target.value)}/>

                            <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject"
                                className="contact-input" required onChange={(e)=>setsubject(e.target.value)}/>
 
                        </div>
                        <div className="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here"
                                required onChange={(e)=>setmessage(e.target.value)}></textarea>
                        </div>
                        <div className="text-start">
                            <input type="submit" className="btn-style btn-style-3" name="btn" value="Send Message" />
                        </div>
                    </form>
                </div>
                <div className="col-md-5 ps-lg-5 mt-md-0 mt-5">
                    <div className="contact-left">
                        <div className="cont-details">
                            <div className="d-flex contact-grid">
                                <div className="cont-left text-center me-3">
                                    <i className="fas fa-building"></i>
                                </div>
                                <div className="cont-right">
                                    <h6>Company Address</h6>
                                    <p>Edu School, 10001, 5th Avenue, 12202 street, London.</p>
                                </div>
                            </div>
                            <div className="d-flex contact-grid mt-4 pt-lg-2">
                                <div className="cont-left text-center me-3">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="cont-right">
                                    <h6>Call Us</h6>
                                    <p><a href="tel:+1(21) 234 4567">+1(21) 112 7368</a></p>
                                </div>
                            </div>
                            <div className="d-flex contact-grid mt-4 pt-lg-2">
                                <div className="cont-left text-center me-3">
                                    <i className="fas fa-envelope-open-text"></i>
                                </div>
                                <div className="cont-right">
                                    <h6>Email Us</h6>
                                    <p><a href="mailto:example@mail.com" className="mail">example@mail.com</a></p>
                                </div>
                            </div>
                            <div className="d-flex contact-grid mt-4 pt-lg-2">
                                <div className="cont-left text-center me-3">
                                    <i className="fas fa-headphones-alt"></i>
                                </div>
                                <div className="cont-right">
                                    <h6>Customer Support</h6>
                                    <p><a href="mailto:info@support.com" className="mail">info@support.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
            width="100%" height="400" frameborder="0"  style={{ border: '0px' }} allowfullscreen=""></iframe>
    </div>

    <Footer/>
    </>
  )
}

export default Contact
