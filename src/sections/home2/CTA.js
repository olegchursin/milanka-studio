import React from 'react';
import { Link } from 'gatsby';
import backgroundImage from '../../assets/image/home-2/jpg/promo-bg-img.jpg';

import backdrop from '../../assets/image/milanka/backdrop-cta.jpeg';

const Content3 = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={className}
        {...rest}
        style={{ backgroundImage: `url(${backdrop})` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="text-center pt-14 pb-15 py-lg-31 dark-mode-texts"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h2 className="font-size-11 mb-7">
                  We work with you to suit your needs.
                </h2>
                <p className="font-size-5 line-height-28 px-md-10 px-lg-16 px-xl-25 mb-0">
                  The studio is available from as little as 1 hour up to to a
                  long 8 hour day if required. If you are a stylist, musician,
                  actor or model you can rent the studio space and bring in your
                  own kit or photographer.
                </p>
                <Link
                  to={'#'}
                  className="btn btn-dodger-blue-2 rounded-5 mt-12"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
