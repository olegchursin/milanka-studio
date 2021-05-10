import React from 'react';
import PageWrapper from '../components/PageWrapper';
import imageRight from '../assets/image/inner-page/jpg/comming-soon-img.png';

const Contact = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: 'pt-13 pt-lg-11 dark-mode-texts',
          headerFluid: false,
          headerSocial: true
        }}
      >
        <div className="min-height-100vh d-flex align-items-center bg-dark-cloud pt-24 pt-md-27 pt-lg-25">
          <div className="container">
            <div className="row no-gutters align-items-center justify-content-center">
              <div className="col-lg-6 col-md-9 col-xs-11 order-2 order-lg-1">
                <div className="pt-9 pt-sm-13 pb-10 pb-md-15 dark-mode-texts pr-md-11 pr-lg-0">
                  <div className="mb-11">
                    <h2
                      className="font-size-11 mb-8 pr-sm-10 pr-md-14 pr-lg-0 pr-xl-10"
                      data-aos="fade-up"
                      data-aos-duration={500}
                      data-aos-once="true"
                    >
                      Somthing exciting is coming soon!
                    </h2>
                    <p
                      className="font-size-7 mb-0 pr-xl-15"
                      data-aos="fade-up"
                      data-aos-duration={700}
                      data-aos-once="true"
                    >
                      This is the future home of Milanka Studio website. Stay
                      tuned.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-9 col-xs-11 order-1 order-lg-2">
                <div
                  className="text-right"
                  data-aos="fade-left"
                  data-aos-duration={500}
                  data-aos-once="true"
                >
                  <img className="w-100 w-xl-auto" src={imageRight} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
