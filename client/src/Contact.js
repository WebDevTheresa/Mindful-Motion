import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Navbar from './NavBar';
import IntroOffer from './IntroOffer';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <h1>Contact Us</h1>
      <Header>
        <h3>Location</h3>
        <p>IA, 2000 McGill College Avenue Tower Montreal QC H3A 3H3</p>
        Join Us
        <p>As Per Schedule</p>
      </Header>

      <Header>
        <h3>Our Hours</h3>
        <p>Phone</p>
        <p>Email</p>

        <h3>Follow Us</h3>
        <FacebookIcon style={{ width: '2em', height: '2em' }} />
        <InstagramIcon style={{ width: '2em', height: '2em' }} />
      </Header>
      <IntroOffer />
      <Footer />
    </>
  );
};

const Header = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;
export default Contact;
