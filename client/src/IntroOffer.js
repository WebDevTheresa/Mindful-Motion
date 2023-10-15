import styled, { withTheme } from 'styled-components';
import Intro from './pictures/Intro.jpg';

const IntroOffer = () => {
  return (
    <Wrapper>
      <OfferWrapper>
        <Offer>
          TRY YOUR FIRST CLASS TODAY!<button>Intro Offer</button>
        </Offer>
      </OfferWrapper>
      <Img src={Intro} alt="fitness" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;

  @media and screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const Img = styled.img`
  height: 20em;
  width: 100%;
  opacity: 0.4;

  @media and screen and (max-width: 768px) {
    width: 100%;
  }
`;
const OfferWrapper = styled.div`
  display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //
`;

const Offer = styled.p`
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 60px;
  position: absolute;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;

export default IntroOffer;
