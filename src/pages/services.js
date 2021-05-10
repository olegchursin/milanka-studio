import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Hero from '../sections/career/Hero';
import CTA from '../sections/career/CTA';
import Features from '../sections/career/Features';
import Jobs from '../sections/career/Jobs';

const Services = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: 'site-header--menu-right',
          headerFluid: false,
          footerStyle: 'style5'
        }}
      >
        <Hero />
        <Features />
        <CTA />
        <Jobs />
      </PageWrapper>
    </>
  );
};
export default Services;
