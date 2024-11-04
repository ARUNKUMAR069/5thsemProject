import { Link } from 'react-router-dom';
import Typewriter from './Typewriter'
import Footer from './Footer';
function Home() {

    function handleTabClick(tabname) {
        localStorage.setItem("tabLink", tabname);
    };

    return (
        <>
        
            <section id="home" className="w3l-banner py-5">
                <div className="banner-content">
                    <div className="container py-4">
                        <div className="row align-items-center pt-sm-5 pt-4">
                            <div className="col-md-6">
                                <h3 class="mb-lg-4 mb-3">Your Kids Deserve The Best Education<span class="d-block"></span>
                                <Typewriter/>
                                </h3>
                                <p className="banner-sub">Active Learning, Expert Teachers & Safe Environment</p>
                                <div className="d-flex align-items-center buttons-banner">
                                    <a href="contact.html" className="btn btn-style mt-lg-5 mt-4">Admission Now</a>
                                </div>
                            </div>
                            <div className="col-md-6 right-banner-2 text-end position-relative mt-md-0 mt-5">
                                <div className="sub-banner-image mx-auto">
                                    <img src="assets/images/banner.png" className="img-fluid position-relative" alt=" "/>
                                </div>
                                <div className="banner-style-1 position-absolute">
                                    <div className="banner-style-2 position-relative">
                                        <h4>Back to School</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <section className="services-w3l-block py-5" idName="features">
                <div className="container py-md-5 py-4">
                    <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '500px' }}>
                        <p className="text-uppercase">Best Features</p>
                        <h3 className="title-style">Achieve Your Goals With Edu School</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="icon-box icon-box-clr-1">
                                {/* <div className="icon"><i className="fas fa-user-friends"></i></div> */}
                                <div className="icon"><i className="fas fa-solid fa-hourglass-start"></i></div>
                                <h4 className="title"><a href="#about">Get Started Now</a></h4>
                                <p>Ras effic itur metusga via suscipit consect eturerse adi unde omnis.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-md-0 mt-4">
                            <div className="icon-box icon-box-clr-2">
                                <div className="icon"><i className="fas fa-regular fa-address-book"></i></div>
                                <h4 className="title"><a href="#about">Contact Us</a></h4>
                                <p>Ras effic itur metusga via suscipit consect eturerse adi unde omnis.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
                            <div className="icon-box icon-box-clr-3">
                                <div className="icon"><i className="fas fa-solid fa-user-tie"></i></div>
                                <h4 className="title"><Link to="/users" onClick={() => handleTabClick("user")}>Access Admin Panel</Link></h4>
                                <p>Ras effic itur metusga via suscipit consect eturerse adi unde omnis.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
                            <div className="icon-box icon-box-clr-4">
                                <div className="icon"><i class="fas fa-solid fa-hammer"></i></div>
                                <h4 className="title"><a href="#about">Access Hod Panel</a></h4>
                                <p>Ras effic itur metusga via suscipit consect eturerse adi unde omnis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="w3l-servicesblock pt-lg-5 pt-4 pb-5 mb-lg-5" id="about">
                <div className="container pb-md-5 pb-4">
                    <div className="row pb-xl-5 align-items-center">
                        <div className="col-lg-6 position-relative home-block-3-left pb-lg-0 pb-5">
                            <div className="position-relative">
                                <img src="assets/images/img1.jpg" alt="" className="img-fluid radius-image"/>
                            </div>
                            <div className="imginfo__box">
                                <h6 className="imginfo__title">Get a Appointment Today!</h6>
                                <p>Nemo enim ipsam oluptatem quia oluptas<br/> sit aspernatur aut odit aut fugit. </p>
                                <a href="tel:http://1(800)7654321"><i className="fas fa-phone-alt"></i> 1-800-654-3210</a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5 pt-lg-0 pt-5">
                            <h3 className="title-style">We Are The Best Choice For Your Child</h3>
                            <p className="mt-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.</p>
                            <ul className="mt-4 list-style-lis pt-lg-1">
                                <li><i className="fas fa-check-circle"></i>Special Education</li>
                                <li><i className="fas fa-check-circle"></i>Access more then 100K online courses</li>
                                <li><i className="fas fa-check-circle"></i>Traditional Academies</li>
                            </ul>
                            <a href="contact.html" className="btn btn-style mt-5">Apply Now</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="w3l-grids-block-5 home-course-bg py-5" id="courses">
                <div className="container py-md-5 py-4">
                    <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '500px' }}>
                        <p className="text-uppercase">Best Courses</p>
                        <h3 className="title-style">Find The Right Course For You</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="coursecard-single">
                                <div className="grids5-info position-relative">
                                    <img src="assets/images/c1.jpg" alt="" className="img-fluid" />
                                    <div className="meta-list">
                                        <a href="courses.html">Art & Design</a>
                                    </div>
                                </div>
                                <div className="content-main-top">
                                    <div className="content-top mb-4 mt-3">
                                        <ul className="list-unstyled d-flex align-items-center justify-content-between">
                                            <li> <i className="fas fa-book-open"></i> 43 Lesson</li>
                                            <li> <i className="fas fa-star"></i> 4.5</li>
                                        </ul>
                                    </div>
                                    <h4><a href="courses.html">Educational Programs</a></h4>
                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                        <h6>$42.00</h6>
                                        <a className="btn btn-style-primary" href="courses.html">Know Details<i
                                            className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                            <div className="coursecard-single">
                                <div className="grids5-info position-relative">
                                    <img src="assets/images/c2.jpg" alt="" className="img-fluid" />
                                    <div className="meta-list">
                                        <a href="courses.html" className="sec-2">Meditation</a>
                                    </div>
                                </div>
                                <div className="content-main-top">
                                    <div className="content-top mb-4 mt-3">
                                        <ul className="list-unstyled d-flex align-items-center justify-content-between">
                                            <li> <i className="fas fa-book-open"></i> 72 Lesson</li>
                                            <li> <i className="fas fa-star"></i> 4.3</li>
                                        </ul>
                                    </div>
                                    <h4><a href="courses.html">Best Meditation classNamees</a></h4>
                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                        <h6>$36.00</h6>
                                        <a className="btn btn-style-primary" href="courses.html">Know Details<i
                                            className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                            <div className="coursecard-single">
                                <div className="grids5-info position-relative">
                                    <img src="assets/images/c3.jpg" alt="" className="img-fluid" />
                                    <div className="meta-list">
                                        <a href="courses.html" className="sec-3">Games</a>
                                    </div>
                                </div>
                                <div className="content-main-top">
                                    <div className="content-top mb-4 mt-3">
                                        <ul className="list-unstyled d-flex align-items-center justify-content-between">
                                            <li> <i className="fas fa-book-open"></i> 14 Lesson</li>
                                            <li> <i className="fas fa-star"></i> 4.2</li>
                                        </ul>
                                    </div>
                                    <h4><a href="courses.html">Games Program in a Week</a></h4>
                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                        <h6>$30.00</h6>
                                        <a className="btn btn-style-primary" href="courses.html">Know Details<i
                                            className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-sm-5 mt-4 pt-sm-0 pt-1">
                        <a className="btn btn-style btn-style-secondary mt-sm-3" href="courses.html">
                            Browse more courses</a>
                    </div>
                </div>
            </div>
           
           
            <section className="w3l-service-1 py-5">
                <div className="container py-md-5 py-4">
                    <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '500px' }}>
                        <p className="text-uppercase">Why Choose Us</p>
                        <h3 className="title-style">Tools For Teachers And Learners</h3>
                    </div>
                    <div className="row content23-col-2 text-center">
                        <div className="col-md-6">
                            <div className="content23-grid content23-grid1">
                                <h4><a href="about.html">Expert Teachers</a></h4>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                            <div className="content23-grid content23-grid2">
                                <h4><a href="about.html">Safe Environment</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            
            <section className="w3-stats pt-4 pb-5" id="stats">
                <div className="container pb-md-5 pb-4">
                    <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '500px' }}>
                        <p className="text-uppercase">Our Statistics</p>
                        <h3 className="title-style">We are Proud to Share with You</h3>
                    </div>
                    <div className="row text-center pt-4">
                        <div className="col-md-3 col-6">
                            <div className="counter">
                                <img src="assets/images/icon-1.png" alt="" className="img-fluid"/>
                                    <div className="timer count-title count-number mt-sm-1" data-to="36076" data-speed="1500"></div>
                                    <p className="count-text">Students Enrolled</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter">
                                <img src="assets/images/icon-2.png" alt="" className="img-fluid"/>
                                    <div className="timer count-title count-number mt-3" data-to="786" data-speed="1500"></div>
                                    <p className="count-text">Our Branches</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mt-md-0 mt-5">
                            <div className="counter">
                                <img src="assets/images/icon-3.png" alt="" className="img-fluid"/>
                                    <div className="timer count-title count-number mt-3" data-to="3630" data-speed="1500"></div>
                                    <p className="count-text">Total Courses</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mt-md-0 mt-5">
                            <div className="counter">
                                <img src="assets/images/icon-4.png" alt="" className="img-fluid"/>
                                    <div className="timer count-title count-number mt-3" data-to="6300" data-speed="1500"></div>
                                    <p className="count-text">Awards Won</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="w3l-index4 py-5" id="testimonials">
                <div className="container py-md-5 py-4">
                    <div className="content-slider text-center">
                        <div className="clients-slider">
                            <div className="mask">
                                <ul>
                                    <li className="anim1">
                                        <img src="assets/images/testi1.jpg" className="img-fluid rounded-circle"
                                            alt="client image" />
                                        <blockquote className="quote"><q>Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse
                                            cillum dolore eu. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.
                                        </q> </blockquote>
                                        <div className="source">- Mario Spe</div>
                                    </li>

                                    <li className="anim2">
                                        <img src="assets/images/testi2.jpg" className="img-fluid rounded-circle"
                                            alt="client image" />
                                        <blockquote className="quote"><q>Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                            illo
                                            inventore.
                                        </q> </blockquote>
                                        <div className="source">- Petey Cru</div>
                                    </li>
                                    <li className="anim3">
                                        <img src="assets/images/testi3.jpg" className="img-fluid rounded-circle "
                                            alt="client image" />
                                        <blockquote className="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam,
                                            quis nostrud exercitation.
                                        </q> </blockquote>
                                        <div className="source">- Anna Sth</div>
                                    </li>
                                    <li className="anim4">
                                        <img src="assets/images/testi1.jpg" className="img-fluid rounded-circle"
                                            alt="client image" />
                                        <blockquote className="quote"><q>Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse
                                            cillum dolore eu. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.
                                        </q> </blockquote>
                                        <div className="source">- Gail For</div>
                                    </li>
                                    <li className="anim5">
                                        <img src="assets/images/testi2.jpg" className="img-fluid rounded-circle"
                                            alt="client image" />
                                        <blockquote className="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam,
                                            quis nostrud exercitation.
                                        </q> </blockquote>
                                        <div className="source">- Boye Fra</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="w3l-blog-block-5 py-5" id="blog">
                <div className="container py-md-5 py-4">
                    <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '500px' }}>
                        <p className="text-uppercase">Our News</p>
                        <h3 className="title-style">Latest <span>Blog</span> Posts</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card-single">
                                <div className="grids5-info">
                                    <a href="#blog"><img src="assets/images/blog2.jpg" alt="" /></a>
                                    <div className="blog-info">
                                        <h4><a href="#blog">Education Programs...</a></h4>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt inc
                                            officia deserunt.</p>
                                        <div className="d-flex align-items-center justify-content-between mt-4">
                                            <a className="d-flex align-items-center" href="#blog" title="23k followers">
                                                <img className="img-fluid" src="assets/images/testi2.jpg" alt="admin"
                                                    style={{ maxWidth: '40px' }}/> <span className="small ms-2">Eetey Cruis</span>
                                            </a>
                                            <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Oct 06, 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                            <div className="blog-card-single">
                                <div className="grids5-info">
                                    <a href="#blog"><img src="assets/images/blog1.jpg" alt="" /></a>
                                    <div className="blog-info">
                                        <h4><a href="#blog">Games Programs...</a></h4>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt inc
                                            officia deserunt.</p>
                                        <div className="d-flex align-items-center justify-content-between mt-4">
                                            <a className="d-flex align-items-center" href="#blog" title="23k followers">
                                                <img className="img-fluid" src="assets/images/testi1.jpg" alt="admin"
                                                    style={{ maxWidth: '40px' }}/> <span className="small ms-2">Molive Joe</span>
                                            </a>
                                            <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Oct 10, 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                            <div className="blog-card-single">
                                <div className="grids5-info">
                                    <a href="#blog"><img src="assets/images/blog3.jpg" alt="" /></a>
                                    <div className="blog-info">
                                        <h4><a href="#blog">Articles Programs...</a></h4>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sunt inc
                                            officia deserunt.</p>
                                        <div className="d-flex align-items-center justify-content-between mt-4">
                                            <a className="d-flex align-items-center" href="#blog" title="23k followers">
                                                <img className="img-fluid" src="assets/images/testi3.jpg" alt="admin"
                                                    style={{ maxWidth: '40px' }}/> <span className="small ms-2">Turne Leo
                                                    </span>
                                            </a>
                                            <p className="date-text"><i className="far fa-calendar-alt me-1"></i>Oct 12, 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w3l-call-to-action-6">
                <div className="container py-md-5 py-sm-4 py-5">
                    <div className="d-lg-flex align-items-center justify-content-between">
                        <div className="left-content-call">
                            <h3 className="title-big">Call To Enroll Your Child</h3>
                            <p className="text-white mt-1">Begin the change today!</p>
                        </div>
                        <div className="right-content-call mt-lg-0 mt-4">
                            <ul className="buttons">
                                <li className="phone-sec me-lg-4"><i className="fas fa-phone-volume"></i>
                                    <a className="call-style-w3" href="tel:+1(23) 456 789 0000">+1(23) 456 789 0000</a>
                                </li>
                                <li><a href="contact.html" className="btn btn-style btn-style-2 mt-lg-0 mt-3">Join for free</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

      <Footer/>

        </>
    )
}
export default Home;
