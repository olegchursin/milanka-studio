import React from 'react';
import { MilankaItems } from '../career/Jobs';

const Pricing = () => {
  return (
    <div className="pb-5 pb-md-11 pb-lg-19">
      <div className="container">
        <div className="row justify-content-center">
          {MilankaItems.map((item, index) => (
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
              <div
                className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
                data-aos="fade-up"
                data-aos-duration={300}
                data-aos-once="true"
              >
                <p className="text-dodger-blue-1 font-size-5 mb-9">
                  {item.shortTitle}
                </p>
                <h2 className="font-size-11 mb-1">{item.price ?? '$0'}</h2>
                <span className="font-size-5 mb-2">{item.badgeText}</span>
                <ul className="list-unstyled font-size-5 line-height-50 heading-default-color pt-8">
                  <li className="mb-7">{item.feature1}</li>
                  <li className="mb-7">{item.feature2}</li>
                  <li className="mb-7">{item.feature3}</li>
                </ul>
                <div className="pt-7 pt-lg-17">
                  <a
                    className="btn btn-blue-3 btn-2 rounded-5"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    rel="noopener"
                  >
                    {item.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="col-xl-7 col-lg-8 col-md-11">
            <div className="text-center mt-10 ">
              <h6>
                By clickgin on the options above, you will be redirected to our
                booking system where you can select the reservation date and
                make an online payment.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
