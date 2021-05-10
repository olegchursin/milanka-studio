import React from 'react';
import { Link } from 'gatsby';

import imgLB from '../../assets/image/milanka-studio-logo-bk.png';
import imgLW from '../../assets/image/milanka-studio-logo-wh.png';

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={`bg-dark-cloud pt-15 pt-lg-26 pb-9 ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="pb-5 pb-lg-22">
            <div className="row justify-content-lg-between">
              {/* Brand Logo */}
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-7">
                <div className="brand-logo mb-10 mb-lg-0 dark-mode-texts pr-lg-10 pr-xl-0 pt-lg-3">
                  <Link to="/#">
                    <img
                      className="mx-auto mx-0 light-version-logo default-logo"
                      src={imgLB}
                      alt=""
                    />
                    <img
                      src={imgLW}
                      alt=""
                      className="dark-version-logo mx-auto mx-0"
                    />
                  </Link>
                  <p className="font-size-5 mb-0 mt-8 mt-lg-10">
                    Unique shooting space for professional photography and film
                    productions in Orange County.
                  </p>
                </div>
              </div>
              {/* End Brand Logo */}
              <div className="col-xl-8 col-md-7 offset-lg-1">
                <div className="row">
                  {/* Single Widgets */}
                  <div className="col-sm-4 col-xs-6">
                    <div className="mb-10 mb-lg-0">
                      <h4 className="font-size-5 font-weight-normal mb-8 text-bali-gray">
                        Studio
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-6">
                          <Link
                            to="/about"
                            className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link
                            to="/services"
                            className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1"
                          >
                            Services
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link
                            to="/pricing"
                            className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link
                            to="/faq"
                            className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1"
                          >
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widgets */}
                  {/* Single Widgets */}
                  <div className="col-sm-4 col-xs-6">
                    <div className="mb-10 mb-lg-0">
                      <h4 className="font-size-5 font-weight-normal mb-8 text-bali-gray">
                        Milanka Brand
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-6">
                          <Link
                            to="https://milankamilanka.com/pages/about"
                            className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1"
                          >
                            About Milanka
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link
                            to="https://milankamilanka.com/collections/unique-dolls"
                            className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1"
                          >
                            Unique Dolls
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link
                            to="https://milankamilanka.com/collections/milanka"
                            className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1"
                          >
                            Clothing
                          </Link>
                        </li>
                        <li className="mb-6">
                          <Link
                            to="https://milankamilanka.com/pages/artist-guided-classes"
                            className="font-size-5 text-lily-white gr-hover-text-dodger-blue-1"
                          >
                            Artist-guided classes
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widgets */}
                  {/* Single Widgets */}
                  <div className="col-sm-4 col-xs-8">
                    <div className="mb-10 mb-lg-0 mr-xl-12">
                      <h4 className="font-size-5 font-weight-normal mb-8 text-bali-gray">
                        Contact
                      </h4>
                      <div className="mt-7">
                        <Link
                          to="/#"
                          className="font-size-5 d-block text-white mb-0"
                          href="mailto:hello@milankamilanka.com"
                        >
                          hello@milankamilanka.com
                        </Link>
                        <Link
                          to="/#"
                          className="font-size-5 d-block text-white mb-0"
                          href="tel:+1-818-536-9495"
                        >
                          (818) 536-9495
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Single Widgets */}
                </div>
              </div>
            </div>
          </div>
          <div className="border-top border-default-color dark-mode-texts d-flex align-items-center justify-content-center justify-content-sm-between flex-column flex-sm-row flex-wrap pt-11">
            <div className="">
              <ul className="d-flex align-items-center list-unstyled mb-0">
                <li>
                  <Link
                    to="https://www.instagram.com/milanka_brand/"
                    className="pl-5 text-white gr-hover-text-dodger-blue-1 font-size-5 px-3"
                  >
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/milankastore"
                    className="pl-5 text-white gr-hover-text-dodger-blue-1 font-size-5 px-3"
                  >
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
