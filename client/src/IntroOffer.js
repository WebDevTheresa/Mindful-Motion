import styled, { withTheme } from 'styled-components';
import Intro from './pictures/Intro.png';

const IntroOffer = () => {
  return (
    <Wrapper>
      <OfferWrapper>
        <Offer>TRY YOUR FIRST CLASS TODAY!</Offer>
      </OfferWrapper>
      <Img src={Intro} alt="fitness" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media and screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const Img = styled.img`
  width: 100%;
  z-index: 2;
  @media and screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const OfferWrapper = styled.div`
  @media and screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Offer = styled.p`
  color: #705c2d;
  position: relative;
  top: 292px;
  font-size: 36px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;

  @media and screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export default IntroOffer;
