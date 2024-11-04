import React, { useEffect, useState } from 'react'
import Adminpanel from '../Adminpanel'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function UpdateUser() {

    const [params] = useSearchParams();
    const uid = params.get("pid")
    const navi = useNavigate()


    const [name, setname] = useState();
    const [phone, setphone] = useState();
    const [email, setemail] = useState();
    const [rollno, setrollno] = useState();
    const [sem, setsem] = useState();
    const [dep, setdep] = useState();

    useEffect(()=>
    {
        if(uid!==null)
        {
            fetchoneuser()
        }
    },[uid])

    async function fetchoneuser()
    {
        try
        {
            const resp = await axios.get(`http://localhost:8000/api/fetchoneuser/${uid}`)
            if(resp.status===200)
            {
                if(resp.data.statuscode===1)
                {
                    const user = resp.data.oneuserdata;
                    setname(user.name);
                    setphone(user.phone);
                    setemail(user.email);
                    setrollno(user.rollno);
                    setsem(user.semester);
                    setdep(user.department);
                }
                else if(resp.data.statuscode===0)
                {
                    toast.error("Cannot Fetch User Data")
                }
            }
            else
            {
                alert("Some Problem Occured")
            }
        }
        catch(e)
        {
            alert(e.message)
        }
    }

    async function updateoneuser() 
    {
        try 
        {
            const updateoneuser = { name, phone, email, rollno, sem, dep , uid}

            const resp = await axios.put("http://localhost:8000/api/updateoneuser" , updateoneuser)
            if (resp.status === 200) 
            {
                if (resp.data.statuscode === 1) 
                {
                    toast.success("User Updated Successfully")
                    
                }
                else 
                {
                    toast.error("User Cannot Updated Successfully")
                }
            }
            else 
            {
                alert("Some error occured")
            }
        }
        catch (e) 
        {
            alert(e.message)
        }
    }

    return (
        <div>
            <Adminpanel />
            <div className='content'>
                <div class="container text-center">
                    <h1>Update User Data</h1>
                </div>
                <div class="container form-container">
                    <section class="form-section">
                        <form onSubmit={updateoneuser} >
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" id="username" value={name} name="username" required onChange={(e)=>setname(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" value={email}required onChange={(e)=>setemail(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" value={phone} required onChange={(e)=>setphone(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="rollno">Roll No</label>
                                <input type="text" id="rollno" name="rollno" required value={rollno} onChange={(e)=>setrollno(e.target.value)}/>
                            </div>
                            <div class="form-group">
                                <label for="department">Department</label>
                                <select
                                    name="department"
                                    id="department"
                                    required
                                    value={dep}
                                    onChange={(e)=>setdep(e.target.value)}
                                >
                                    <option value="B.Tech Computer Science Engineering">B.Tech Computer Science Engineering</option>
                                    <option value="B.Tech Electronics and Communication Engineering">B.Tech Electronics and Communication Engineering</option>
                                    <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
                                </select>
                            </div>


                            <div class="form-group">
                                <label for="semester">Semester</label>
                                <select 
                                    name="Semester"
                                    required
                                    value={sem}
                                    onChange={(e)=>setsem(e.target.value)}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div class="submit-btn">
                                <button type="submit">Update</button>
                            </div>
                        </form>
                        
                    </section>
                </div>

            </div>
        </div>
    )
}

export default UpdateUser
