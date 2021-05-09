import React from 'react';

import PageWrapper from '../components/PageWrapper';

const Contact = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: 'site-header--menu-right',
          headerFluid: false,
          footerStyle: 'style5'
        }}
      >
        <div className="min-height-100vh d-flex align-items-center pt-23 pt-md-26 pt-lg-30 pb-8 pb-md-12 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="mb-10 mb-lg-18 text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                >
                  <h2 className="font-size-11 mb-7">Contact us</h2>
                  <p className="font-size-7 mb-0">
                    Send us a message and we will get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* Contact Form */}
            <div className="pt-12 pb-10 max-w-536 mx-auto">
              <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                Address:
              </h4>
              <p className="font-size-6 font-weight-bold heading-default-color">
                2836 East Coast Hwy Corona Del Mar, CA 92625
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                {/* contact details */}
                <div
                  className="top-contact-info bg-default-1 max-w-540 mx-auto py-10 px-13 rounded-10"
                  data-aos="fade-up"
                  data-aos-duration={600}
                  data-aos-once="true"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="border-md-right border-cornflower-blue">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Call us
                        </h4>
                        <a
                          className="font-size-6 font-weight-bold heading-default-color"
                          href="/#"
                        >
                          (818) 536-9495
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="pl-1 pr-3">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Email us
                        </h4>
                        <a
                          className="font-size-6 font-weight-bold heading-default-color"
                          href="/#"
                        >
                          hello@milankamilanka.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* contact details */}
                <div className="pt-12 pb-10 max-w-536 mx-auto">
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                    data-aos-once="true"
                  >
                    <input
                      type="hidden"
                      name="apikey"
                      value="41c6cfeb-c930-4286-8bda-1c30a9a24523"
                    />

                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="form-group mb-7 position-relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="form-group mb-7 position-relative">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 pt-7 font-size-5 border-default-color"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <input
                      type="hidden"
                      name="redirect"
                      value="https://milankamilanka.com/pages/contact-success"
                    />
                    <button className="btn btn-blue-3 h-55 w-100 rounded-4">
                      Send Message
                    </button>
                  </form>
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
