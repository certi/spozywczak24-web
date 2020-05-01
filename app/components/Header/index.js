import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import Logo from './Logo';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import Lolo from './logoRoundSmall.gif';
import messages from './messages';

function Header() {
  return (
    <div>

      <div style={{ maxHeight: '25vh', overflow: 'hidden', position: 'relative' }}>
        <Img src={Banner} alt="spozywczak24.pl  - Logo" />
        <Logo src={Lolo} alt="spozywczak24.pl  - Logo" />
      </div>

      <div style={{ textAlign: 'center' }}>
        <HeaderLink to="/">
          <FormattedMessage {...messages.list} />
        </HeaderLink>
        <HeaderLink to="/jak_zamawiac">
          <FormattedMessage {...messages.howto} />
        </HeaderLink>
      </div>
    </div>
  );
}

export default Header;
