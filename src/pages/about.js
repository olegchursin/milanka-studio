import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Hero from '../sections/about/Hero';
import Masonry from '../sections/about/Masonry';
import Content from '../sections/about/Content';

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
        <Masonry />
        <Content />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
