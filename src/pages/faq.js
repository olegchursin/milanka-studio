import React from 'react';

import Link from 'gatsby-link';

import PageWrapper from '../components/PageWrapper';
import { milankaFAQs } from '../sections/pricing/Faq';

const Faq = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: 'site-header--menu-right',
          headerFluid: false,
          footerStyle: 'style5'
        }}
      >
        <div className="pt-23 pt-md-26 pt-lg-31 pb-13 pb-md-18 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-9">
                <div className="text-center mb-13 mb-lg-18">
                  <h2 className="font-size-11 mb-7">
                    Frequently Asked Question
                  </h2>
                  <p className="font-size-7 mb-0 px-md-10 px-xl-13">
                    Our focus is always on finding the best people to work with.
                    Our bar is high, but you look ready to take on the
                    challenge.
                  </p>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* Faqs */}
            {/* Faqs */}
            <div className="row justify-content-center">
              {milankaFAQs.map((faq, index) => (
                <div key={index} className="col-lg-6 col-md-10">
                  <div
                    className="d-flex mb-10 mb-lg-17"
                    data-aos="fade-up"
                    data-aos-duration={faq.aosDuration ?? 300}
                  >
                    <div className="mr-6">
                      <div className="bg-light-orange circle-28 text-white mt-1">
                        <i className="fa fa-question" />
                      </div>
                    </div>
                    <div className="">
                      <h4 className="font-size-7 mb-7">{faq.question}</h4>
                      <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Button  */}
            <div
              className="text-center pt-lg-3 pb-lg-3"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <p className="font-size-6 mb-0">
                Have more questions? We are happy to answer them.{' '}
                <Link to="/contact">Contact us</Link>
              </p>
            </div>
            {/* Button End */}
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Faq;
