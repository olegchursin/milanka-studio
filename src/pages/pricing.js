import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Hero from '../sections/pricing/Hero';
import Pricing from '../sections/pricing/Pricing';
import Faq from '../sections/pricing/Faq';

const PricingPage = () => {
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
        <Pricing />
        <Faq />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
