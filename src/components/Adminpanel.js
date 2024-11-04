import React, { useEffect, useState } from 'react'
import { FaUser, FaHome, FaBookOpen, FaYoutube, FaClipboardList, FaBlogger } from "react-icons/fa";
import { RiContactsBookFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';


function Adminpanel() {

    const [activeTab, setactiveTab] = useState("Users");

    useEffect(() => {
      const savedActiveLink = localStorage.getItem("tabLink");
      if (savedActiveLink) {
        setactiveTab(savedActiveLink);
      }
    }, []);

    function handleTabClick(tabname) {
        setactiveTab(tabname);
        localStorage.setItem("tabLink", tabname);
    };

    return (
        <>
            <aside class="sidebar">
                <br />

                <div class="admin-panel">
                    Admin Panel
                </div>

                <nav className="sidebar-nav">
                    <Link to="/users" className={`sidebar-link , ${activeTab === "user" ? "active" : ""}`} onClick={() => handleTabClick("user")}><span className="sidebar-icon">{<FaUser />}</span>Users</Link>

                    <Link to="/contact" className={`sidebar-link  ${activeTab === "contact" ? "active" : ""}`} onClick={() => handleTabClick("contact")}><span className="sidebar-icon">{<FaClipboardList />}</span>Contact</Link>

                    <Link to="/syallabus" className={`sidebar-link , ${activeTab === "Syallabus" ? "active" : ""}`} onClick={() => handleTabClick("Syallabus")}><span className="sidebar-icon">{<RiContactsBookFill />}</span>Syallabus</Link>

                    <Link to="/notes" className={`sidebar-link , ${activeTab === "Notes" ? "active" : ""}`} onClick={() => handleTabClick("Notes")}><span className="sidebar-icon">{<FaClipboardList />}</span>Notes</Link>

                    <Link to="/pyq" className={`sidebar-link , ${activeTab === "pyq" ? "active" : ""}`} onClick={() => handleTabClick("pyq")}><span className="sidebar-icon">{<FaBookOpen />}</span>Previous Year Questions</Link>

                    <Link to="/youtube" className={`sidebar-link , ${activeTab === "Youtube" ? "active" : ""}`} onClick={() => handleTabClick("Youtube")}><span className="sidebar-icon">{<FaYoutube />}</span>Youtube</Link>

                    <Link to="/books" className={`sidebar-link , ${activeTab === "Books" ? "active" : ""}`} onClick={() => handleTabClick("Books")}><span className="sidebar-icon">{<FaBookOpen />}</span>Books</Link>

                    <Link to="/blogs" className={`sidebar-link , ${activeTab === "Blogs" ? "active" : ""}`} onClick={() => handleTabClick("Blogs")}><span className="sidebar-icon">{<FaBlogger />}</span>Blogs</Link>

                    <Link to="/" className="sidebar-link"><span className="sidebar-icon">{<FaHome />}</span>Home</Link>

                </nav>
            </aside>
        </>
    )

}

export default Adminpanel
