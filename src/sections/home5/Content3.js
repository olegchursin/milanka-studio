import React from 'react';
import { Link } from 'gatsby';

import img01 from '../../assets/image/milanka/studio-07.png';
import img02 from '../../assets/image/milanka/studio-06.png';
import img03 from '../../assets/image/milanka/studio-08.png';

const Content3 = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-md-9 position-static">
            {/* content-2 start */}
            <div className="l5-content-gallery-img">
              {/* content img start */}
              <div className="d-xs-flex ml-lg-15 mx-xl-n3">
                <div className="d-flex flex-column px-3 px-sm-6 w-100 mr-xl-14">
                  {/* single image start */}
                  <img
                    src={img02}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    className="w-100 pb-6 pb-sm-9 rounded-bottom-10"
                  />
                  {/* single image end */}
                  {/* single image */}
                  <img
                    src={img01}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    data-aos-delay={700}
                    className="w-100 pb-6 pb-sm-9 rounded-10"
                  />
                  {/* single image end */}
                  {/* single image */}
                  <img
                    src={img03}
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={500}
                    data-aos-delay={700}
                    className="w-100 rounded-top-10"
                  />
                  {/* single image end */}
                </div>
              </div>
              {/* abs-content end */}
            </div>
            {/* content-2 end */}
          </div>
          {/* End Right Image */}
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="dark-mode-texts mt-10 mt-lg-0 pr-xs-15 pr-sm-14 pr-md-13 pr-lg-0 pl-lg-15">
              <h6
                className="font-size-3 text-white text-uppercase mb-10 letter-spacing-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                Popular choice
              </h6>
              <h2
                className="font-size-10 mb-8 letter-spacing-n83  pr-xs-25 pr-sm-15 pr-md-15 pr-lg-0"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                Facilities and equipment you need.
              </h2>
              <p
                className="font-size-7 mb-0"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                Our studio has ample floor space, is fully air-conditioned and
                features a large shooting cove with high ceiling. We provide
                coffee, tea, and drinking water free of charge.
              </p>
              <div className="mt-12" data-aos="fade-up" data-aos-delay={900}>
                <Link
                  to="/pricing"
                  className="btn btn-sunset btn-xl h-55 rounded-5"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
