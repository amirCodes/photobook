import React, { Fragment } from 'react';
import video1 from './media/2.mp4';
import './style.css';


function VideoBanner() {
  return (
    <Fragment>
      <section class="video-banner bg-light" >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="video-banner-title text-center">
                <h3 class="font-weight-bold">OUR <span class="text-custom">TEAM &  CULTURE</span></h3>
                <p class="video-banner-subtitle mx-auto text-muted">We believe in making moments matter, inspired designs and outstanding craftsmanship</p>
                <div class="">
                  <i class=""></i>
                </div>
              </div>
            </div>
          </div>
          {/* video banner text */}
          <div class="row vertical_content_manage mt-5">
            <div class="col-lg-6">
              <div class="video-header-main mt-3">
                <h4 class="video_heading text-capitalize font-weight-bold mt-4">OUR CULTURE AND WHERE WE WORK</h4>
                <p class=" mt-3">
                  Photobook Worldwide is the home to some of the best minds and talents around. We’re a fast-paced company with a vastly young, professional and passion driven workforce. While we're based in Malaysia, our teams are internationally diverse - creating a fun, dynamic and unconventional culture. Continuous skill building, passive learning, knowledge sharing and team building is something we greatly emphasise on.
                </p>
                <p class=" mt-3">
                  Regardless of position and department, everyone has equal opportunity to shine, recognising the hard work each of us has put in to achieve our goals; so results and efforts are rewarded                </p>
              </div>
            </div>
            {/* Video section */}
            <div class="col-lg-6">
              <div class="video-banner mt-3">
                {/* <iframe  class="img-fluid mx-auto d-block"
                  src={video1} type="video/mp4">
                </iframe> */}
                <video src={video1} width="600" height="300" className="player" controls="controls" autoPlay muted />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default VideoBanner;
