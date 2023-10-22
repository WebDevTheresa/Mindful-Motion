import styled from 'styled-components';
import Navbar from './NavBar';
import Footer from './Footer';
import IntroOffer from './IntroOffer';
import IntroRate from './IntroRate';

const Rates = () => {
  return (
    <>
      <Navbar />
      <Header>Prices</Header>
      <IntroRate />
      <IntroOffer />
      <Footer />
    </>
  );
};

const Header = styled.div`
  height: 170px;
  width: 100%;
  padding: 20px;
  background-color: #84a98c;
  display: flex;
  justify-content: flex-start;
  font-size: 80px;
  color: white;
  align-items: flex-end;

  @media only screen and (max-width: 768px) {
    // flex-direction: column;
    // padding: 40px 40px;
    height: 72px;
    width: 100%;
    display: block;
  }
`;
export default Rates;
