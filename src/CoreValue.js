import React, { Fragment } from 'react';
import './style.css';


function CoreValue() {
    return (
        <Fragment>
            <section className="core-values">
                <div className="core-values-container">
                    {/* header of core values */}
                    <div className="core-values-head text-center">
                        <h2>Our Core Values</h2>
                        <h6>we care about our customers</h6>
                    </div>
                    {/*  Core values  */}
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="item">
                                <div className="img">
                                    <img src="https://content.shopback.com/my/wp-content/uploads/2017/02/07185527/pexels-photo-297648.jpeg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="sign-text">
                                        <span>7Day<br /> Shipping</span>
                                    </div>
                                    <a href=""><h5>7-DAY GUARANTEED SHIPPING</h5></a>
                                    <p>We understand the anticipation and the excitement.
                                    That is why we came out with a 7-day shipping to your doorstep.
                                    If your order does not reach you by the stipulated time, we will credit you your shipping fee.
                                    If your order does not reach you by the stipulated time, we will credit you your shipping fee.
                                    With this in mind, your merchandise will be produced within the shortest period of time, and delivered to your doorstep within 7 working days, all without compromising our high standards of quality.
                                        If your order does not reach you by the stipulated time, we will credit you your shipping fee.</p>
                                    <a href="#" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-6">
                            <div className="item">
                                <div className="img">
                                    <img src="https://media2.pbwwcdn.net/home/What+You+Can+Create/valentines19/img_photo_gifts.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="sign-text">
                                        <span>Free<br /> Shipping</span>
                                    </div>
                                    <a href=""><h5>FREE EXPRESS SHIPPING</h5></a>
                                    <p>
                                        You are entitled for FREE express shipping upon spending a qualifying amount on our products. Yes, absolutely free!
                                        Track the progress of your order by signing into your account.
                                    <h4>Terms and Conditions</h4>
                                        <ul>
                                            <li>Applies to the subtotal of each item in the cart that meets the qualifying amount.</li>
                                            <li>Amount spent on shipping and taxes are not counted towards qualification.</li>
                                        </ul>
                                    </p>
                                    <a href="#" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="item">
                                <div className="img">
                                    <img src="https://resources.wobbjobs.com/resized/uploads/jobs-malaysia/company_images/5265/jobs-malaysia-photobook-worldwide-15083926_thumb.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="sign-text">
                                        <span>100%<br /> Quarantee</span>
                                    </div>
                                    <a href=""><h5>100% QUALITY GUARANTEE</h5></a>
                                    <p>
                                        Your photo product undergoes rigorous process of quality control before being shipped. Why do we do that? Because we believe that fond memories deserve the best. Unforgettable adventures with loved ones, your wedding, your kid’s first pictures, these are moments you will never wish to forget.
                                        100% Quality Guarantee is all about your satisfaction. We want you to be HAPPY.
                                  </p>
                                    <a href="#" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-6">
                            <div className="item">
                                <div className="img">
                                    <img src="https://www.incimages.com/uploaded_files/image/WCO_WPR_1920x1080_337207.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <div className="sign-text">
                                        <span>Free<br /> Forever</span>
                                    </div>
                                    <a href=""><h5>FREE PERSONALIZATION OPTIONS</h5></a>
                                    <p>
                                        Providing you with full personalization and creative control is the nature of our business. We want consumers to make the best out of their hidden creativity, by using elements meticulously created by our very own designers. From tons of scrapbook items, backgrounds, frames, page styles, to the ready templates made for the ease of your creation.
                                        They will be available for FREE, forever.
                                     </p>
                                    <a href="#" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default CoreValue;
