import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Header() {


    return (
        <>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">

                        <Link to="/" className="navbar-brand" aria-current="page"><i className="fas fa-graduation-cap"></i>Edu School</Link>

                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <Link to="/" className="active">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup">
                                        Register
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </li>
                                
                            </ul>
                            <div className="header-search position-relative">
                                <div className="search-right mx-lg-2">
                                    <a href="#search" className="btn search-btn p-0" title="search">
                                        <i className="fas fa-search"></i></a>
                                    <div id="search" className="pop-overlay">
                                        <div className="popup">
                                            <form action="#search" method="GET" className="search-box">
                                                <input type="search" placeholder="Enter Keyword..." name="search"
                                                    required="required" autofocus="" />
                                                <button type="submit" className="btn"><span className="fas fa-search"
                                                    aria-hidden="true"></span></button>
                                            </form>
                                        </div>
                                        <a className="close" href="#close">×</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;