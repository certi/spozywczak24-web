import styled from 'styled-components';

import NormalImg from 'components/Img';

const Logo = styled(NormalImg)`
  width: 10vh;
  height: 10vh;
  position: absolute;
  left: 2vw;
  bottom: 2vw;
  z-index: 100;
  display: block;
`;

export default Logo;
