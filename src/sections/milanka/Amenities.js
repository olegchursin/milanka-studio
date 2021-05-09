import React from 'react';

import light from '../../assets/image/milanka/icon-light.png';
import wifi from '../../assets/image/milanka/icon-wifi.png';
import stands from '../../assets/image/milanka/icon-stands.png';
import coffee from '../../assets/image/milanka/icon-coffee.png';
import more from '../../assets/image/milanka/icon-more.png';

const Amenity = ({ image }) => {
  return (
    <>
      <div className="single-brand-logo mx-5 my-6">
        <img src={image} alt="" data-aos="fade-in" data-aos-once="true" />
      </div>
    </>
  );
};

const Amenities = ({ className, ...rest }) => {
  const images = [light, wifi, stands, coffee, more];
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-lg-8 text-center text-lg-center">
                <h5 className="font-size-6 font-weight-normal text-bali-gray">
                  Included for free with each reservation
                </h5>
              </div>
            </div>
          </div>
          <div className="brand-logo-small d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap">
            {images.map((brand, index) => (
              <Amenity image={brand} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
