import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import CenteredSection from '../../containers/HomePage/CenteredSection';

function Footer() {
  return (
    <Wrapper>
      {/*<section>*/}
      {/*  <FormattedMessage {...messages.licenseMessage} />*/}
      {/*</section>*/}
      <section>
        <LocaleToggle />
      </section>
      <CenteredSection>
        <FormattedMessage
          {...messages.copyright}
          values={{
            year: 2020,
          }}
        />
        <br />
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            facebook: <A href="https://www.facebook.com/Spozywczak24/">facebooku</A>,
          }}
        />
      </CenteredSection>
    </Wrapper>
  );
}

export default Footer;
