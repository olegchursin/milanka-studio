import React from 'react';
import JobCard2 from '../../components/JobCard2';

const items = [
  {
    location: 'Orange County, CA',
    badgeText: '1 hour',
    badgeColor: 'dark-green',
    title: '1 hour',
    href:
      'https://milankamilanka.com/products/pro-photo-studio-rental?variant=39363625123980'
  },
  {
    location: 'Orange County, CA',
    badgeText: '2 hours',
    badgeColor: 'buttercup',
    title: '2 hours',
    href:
      'https://milankamilanka.com/products/pro-photo-studio-rental?variant=39363625156748'
  },
  {
    location: 'Orange County, CA',
    badgeText: '3 hours',
    badgeColor: 'buttercup',
    title: '3 hours',
    href:
      'https://milankamilanka.com/products/pro-photo-studio-rental?variant=39363625189516'
  },
  {
    location: 'Orange County, CA',
    badgeText: '4 hours',
    badgeColor: 'buttercup',
    title: '4 hours',
    href:
      'https://milankamilanka.com/products/pro-photo-studio-rental?variant=39363625222284'
  },
  {
    location: 'Orange County, CA',
    badgeText: '5 hours',
    badgeColor: 'blue-2',
    title: '5 hours',
    href:
      'https://milankamilanka.com/products/pro-photo-studio-rental?variant=39363625255052'
  },
  {
    location: 'Orange County, CA',
    badgeText: '6 hours',
    badgeColor: 'dark-green',
    title: '6 hours',
    href:
      'https://milankamilanka.com/products/pro-photo-studio-rental?variant=39363625287820'
  }
];

const Jobs = () => {
  return (
    <div className="bg-default-3 pt-12 pt-md-18 pb-md-19 pb-15 pt-lg-22 pb-lg-26">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div
              className="text-center mb-7"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2 className="font-size-10 mb-7 letter-spacing-n83">Book now</h2>
              <p className="font-size-6 font-weight-light mb-0 px-md-5 px-lg-0">
                Chose the duration of your reservation below. You will be
                forwarded to our booking system where you can select the date
                and make an online payment.
              </p>
            </div>
          </div>
        </div>
        {/* career roles */}
        <div className="row mt-lg-9">
          {items.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-9" key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener"
                className="pt-9 pb-9 pl-11 pr-10 bg-white d-block rounded-0 shadow-2"
                data-aos="fade-up"
                data-aos-duration={900}
              >
                <JobCard2 options={item} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
