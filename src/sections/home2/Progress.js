import React from 'react';

import imgA1 from '../../assets/image/home-2/png/arrow-1.png';
import imgA2 from '../../assets/image/home-2/png/arrow-2.png';
import imgS from '../../assets/image/home-2/png/search.png';
import imgE from '../../assets/image/home-2/png/event-confirm.png';
import imgR from '../../assets/image/home-2/png/right-layer.png';

const Progress = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-xs-10">
              <div className="text-center pt-13 pt-lg-23 pb-13 pb-lg-12 pr-lg-10 pr-xl-0">
                <h2 className="font-size-11 mb-0">
                  Booking is truly is simple.
                </h2>
              </div>
            </div>
          </div>
          {/* <!-- Section Title --> */}
          {/* <!-- Progress Items --> */}
          <div className="row justify-content-center">
            <div className="col-sm-12 col-xs-8">
              <div className="timeline-area d-sm-flex just justify-content-lg-between flex-wrap flex-lg-nowrap position-relative">
                {/* <!-- Image Group --> */}
                <div className="image-group-3">
                  <div
                    className="arrow-shape-1 d-none d-lg-block absolute-top-left"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <img src={imgA1} alt="" />
                  </div>
                  <div
                    className="arrow-shape-2 d-none d-lg-block absolute-top-right"
                    data-aos="zoom-in"
                    data-aos-delay="1100"
                    data-aos-once="true"
                  >
                    <img src={imgA2} alt="" />
                  </div>
                </div>
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src={imgS} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6">Pick the Duration</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                      Whether it's a quick one-hour shoot or an all-day marathon
                      we have you covered.
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-once="true"
                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src={imgE} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6">Choose the Date</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                      Select the date that works for you. Please contact us to
                      discuss any preferences.
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
                {/* <!-- Single Progress --> */}
                <div
                  className="single-widgets pr-md-18 pr-lg-0 pl-lg-10 pl-xl-22 mb-10 mb-lg-0 text-center text-md-left"
                  data-aos="zoom-in"
                  data-aos-delay="1300"
                  data-aos-once="true"
                >
                  <div className="square-97 bg-dodger-blue-2 rounded-10 mb-10 shadow-bg-dodger-blue-2 mx-auto mx-md-0">
                    <img src={imgR} alt="" />
                  </div>
                  <div className="">
                    <h3 className="font-size-8 mb-6">Book and Shoot</h3>
                    <p className="font-size-5 line-height-28 mb-0">
                      Make an online payment and get ready to shoot. Have
                      questions? We are here to help.
                    </p>
                  </div>
                </div>
                {/* <!-- End Single Progress --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Progress Items --> */}
        </div>
      </div>
    </>
  );
};

export default Progress;
