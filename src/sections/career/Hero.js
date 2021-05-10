import React from 'react';

const Hero = () => {
  return (
    <div className="pt-23 pt-md-25 pt-lg-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div
              className="text-center mb-11 mb-lg-24"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={500}
            >
              <h2 className="font-size-11 mb-5">What we offer</h2>
              <p className="font-size-7 mb-0">
                We store a wide range of professional lighting equipment,
                strobes, continuous lights, softboxes, umbrellas, reflectors,
                light stands, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
