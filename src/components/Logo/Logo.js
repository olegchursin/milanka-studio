import React from 'react';
import { Link } from 'gatsby';

import logoB from '../../assets/image/milanka-studio-logo-bk.png';
import logoW from '../../assets/image/milanka-studio-logo-wh.png';

const Logo = ({ className = '', ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <img src={logoB} alt="" className="light-version-logo" />
      <img src={logoW} alt="" className="dark-version-logo" />
    </Link>
  );
};

export default Logo;
