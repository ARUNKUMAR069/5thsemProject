import React, { useEffect, useState } from 'react'
import Adminpanel from '../Adminpanel'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function User() {

    const [membersdata, setmembersdata] = useState([])

    useEffect(() => {
        fetchallusers();
    }, [])

    async function fetchallusers()
    {
        
        try {
            const resp = await axios.get("http://localhost:8000/api/fetchallusers")
            if (resp.status === 200) {
                if (resp.data.statuscode === 1) {
                    setmembersdata(resp.data.usersdata)
                }
                else if (resp.data.statuscode === 0) {
                    setmembersdata([]);
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

    async function deluser(id)
    {
        var confirm = window.confirm("Are u sure want to delete the user")
        if(confirm===true)
        {
            try
            {
                const resp = await axios.delete(`http://localhost:8000/api/deluser?id=${id}`)
                if(resp.status===200)
                {
                    if(resp.data.statuscode===1)
                    {
                        toast.success("User Deleted Successfully")
                        fetchallusers();
                    }
                    else if(resp.data.statuscode===0)
                    {
                        alert("User not Deleted")
                    }
                }
            }
            catch(e)
            {
                toast.error(e.message)
            }
        }
    }

    return (
        <div>
            <Adminpanel />
            <div className='content'>
                {
                    membersdata.length > 0 ?
                        <section className="section">
                            <div className="section-content">
                                <h1 className="section-title">Admin Users Data</h1>

                                <div className="user-count">
                                    <p className="user-count-text">
                                        Total Users Registered: {membersdata.length}
                                    </p>
                                </div>
                                <div className="table-container">
                                    <table >
                                        <thead>
                                            <tr className="table-header">
                                                <th className="table-header">Name</th>
                                                <th className="table-header">Roll No</th>
                                                <th className="table-header">Department</th>
                                                <th className="table-header">Semester</th>
                                                <th className="table-header">Email</th>
                                                <th className="table-header">Phone</th>
                                                <th className="table-header">Update</th>
                                                <th className="table-header">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                membersdata.map((item, index) => 
                                                    <tr key={index} className="table-row">
                                                        <td className="table-cell">{item.name}</td>
                                                        <td className="table-cell">{item.rollno}</td>
                                                        <td className="table-cell">{item.department}</td>
                                                        <td className="table-cell">{item.semester}</td>
                                                        <td className="table-cell">{item.email}</td>
                                                        <td className="table-cell">{item.phone}</td>
                                                        <td className="table-cell">
                                                            <Link to={`/updateuser?pid=${item._id}`} className="edit-button">
                                                                Edit
                                                            </Link>
                                                        </td>
                                                        <td className="table-cell">
                                                            <button className="delete-button" onClick={()=>deluser(item._id)} >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )   
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section> : <div class="no-user-message">No User Found</div>
                }
            </div>
        </div>
    )
}

export default User
