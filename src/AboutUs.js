import React, { Fragment } from 'react';
import './style.css';

function AboutUs() {
    return (
        <Fragment>
            <section className="about-section">
                <div className="container">
                    <div className="row clearfix">

                        {/* Content Column */}
                        <div className="content-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <div className="title">WHO WE ARE</div>
                                    <h2>We Are Leading <br /> The Interiore Design </h2>
                                </div>
                                <div className="text">
                                    Photobook Worldwide is the leading e-commerce company in South East Asia that provides a unique experience in preserving meaningful memories through fully personalisable Photo Albums and Photo Products. Headquartered in Malaysia, we have offices located in Canada, Australia, Philippines, and Thailand catering to the global market.                            </div>
                                <div className="text">
                                    We’re one of the most avant-garde players in the industry, consistently implementing new tech and innovative practices to push ourselves further.
                                </div>
                                <a href="#" className="theme-btn btn-style-three">Read More</a>
                            </div>
                        </div>

                        {/*  Image Column  */}
                        <div className="image-column col-md-6 col-sm-12 col-xs-12">
                            <div className="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt="" />
                                    <div className="overlay-box">
                                        <div className="year-box"><span className="number">15</span>Years <br /> Working <br />Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default AboutUs;
