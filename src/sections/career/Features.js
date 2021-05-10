import React from 'react';
import FreatureCard2 from '../../components/FreatureCard2';
import imgE from '../../assets/image/inner-page/png/explore.png';

const items = [
  {
    icon: imgE,
    title: 'Strobe Lighting',
    content: '3x Godox AD600BM'
  },
  {
    icon: imgE,
    title: 'Continuous Lighting',
    content: '2x Godox VL200'
  },
  {
    icon: imgE,
    title: 'Beauty Dish',
    content:
      '16in/42cm Standard Reflector Beauty Dish with Honeycomb Grid,White Diffuser Sock'
  },
  {
    icon: imgE,
    title: 'Diffuser',
    content:
      'Standard Reflector Lamp Shade Dish Diffuser with 20° /40°/ 60° Honeycomb Grid White Soft Cloth'
  },
  {
    icon: imgE,
    title: 'Softbox',
    content:
      '27in/70cm 10s Quick Setup Portable Collapsible Hexadecagon Large Parabolic Softbox Diffuser'
  },
  {
    icon: imgE,
    title: 'Softbox',
    content:
      'Phottix raja Quick-Folding strip softbox 30*140 cm (12"-55") - 2 pieces'
  },
  {
    icon: imgE,
    title: 'Softbox',
    content: 'Phottix Raja Quick-Folding softbox 150cm (59") - 1 piece'
  },
  {
    icon: imgE,
    title: 'Stands & Mounting',
    content:
      'Neewer Pro 100% Stainless Steel Light Stand Tripod with Pulleys, Heavy Duty Max. Height 10ft/305cm Folded Height 3.9ft/120cm ( 2 pieces)'
  },
  {
    icon: imgE,
    title: 'Stands & Mounting',
    content:
      '4x Neewer Photo Studio Lighting Stand Heavy Duty 10 feet/3 meters Support Stand with 4 feet/1.2 meters Hold Arm and Grip Head'
  }
];

const Features = () => {
  return (
    <div className="pb-9 pb-md-13 pb-lg-15">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-7 col-xs-8">
            <div
              className="text-center mb-7 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <h2 className="font-size-10 letter-spacing-n83">
                Studio Equipment
              </h2>
            </div>
          </div>
        </div>
        {/* End Section title */}
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-xs-11 mb-7 mb-lg-15"
              data-aos="fade-up"
              data-aos-duration={900}
              key={index}
            >
              <FreatureCard2 options={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
