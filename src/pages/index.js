import React from 'react';

import PageWrapper from '../components/PageWrapper';
import Hero from '../sections/home5/Hero';
import Amenities from '../sections/milanka/Amenities';
import CTA from '../sections/home2/CTA';
import Progress from '../sections/home2/Progress';
import Content3 from '../sections/home5/Content3';
import Content1 from '../sections/home5/Content1';

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: 'site-header--menu-right',
          headerFluid: false,
          footerStyle: 'style5'
        }}
      >
        <Hero className="position-relative pt-22 pt-lg-31 pb-13 pb-lg-25" />
        <Content3 className="bg-dark-cloud pt-15 pt-md-19 pt-lg-33 pt-xl-0 pb-15 pb-md-19 pb-lg-31 pb-xl-0 position-relative overflow-hidden" />
        <Amenities className="bg-default-1 pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" />
        <Progress className="pb-lg-21 border-top border-default-color-1" />
        <Content1 className="bg-default-5 pt-13 pt-md-19 pt-lg-0 pb-14 pb-md-18 pb-lg-26 overflow-hidden" />
        <CTA className="bg-images" />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
