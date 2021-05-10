import React from 'react';

export const milankaFAQs = [
  {
    question: 'What equipment is being provided?',
    answer:
      'We provide a wide variety of lightning equipment. See our Services section for full information and list of photographic equipment available.',
    aosDuration: 300
  },
  {
    question: 'How ow can I p ay for my reservation',
    answer:
      'After you select the reservation duration, you will be redirected to our booking system to Select the time and make a payment online.',
    aosDuration: 600
  },
  {
    question: 'What is the studio capacity?',
    answer:
      'We offer a unique studio space. Unfortunately it is limited to 10 people.',
    aosDuration: 500
  },
  {
    question: 'Do you have backdrops?',
    answer:
      'We sure do. Please visit our Services page for the list of all the backdrops options we provide.',
    aosDuration: 300
  }
];

const Faq = () => {
  return (
    <div className="pb-13 pb-md-18 pb-lg-25">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="text-center mb-13 mb-lg-19">
              <h2 className="font-size-9 mb-0">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
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
            Have more questions? We are happy to answer them.
            <a
              className="text-blue-3 btn-link-with-underline ml-5"
              href="https://studio.milankamilanka.com/contact/"
            >
              Contact us
            </a>
          </p>
        </div>
        {/* Button End */}
      </div>
    </div>
  );
};

export default Faq;
