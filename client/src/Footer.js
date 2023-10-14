import styled from 'styled-components';
import logo from './pictures/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <MainWrapper>
        <Wrapper>
          <img src={logo} alt="logo" style={{ width: '4em', height: '4em' }} />
          <p>IA, 2000 McGill College Avenue Tower Montreal QC H3A 3H3</p>
        </Wrapper>
        <Wrapper>
          <h6>Classes</h6>
          <p>Advanced Pilates</p>
          <p>Boxing</p>
          <p>Yoga</p>
          <p>Advanced Stretching</p>
          <p>Barre Pilates</p>
          <p>Beginner Pilates</p>
        </Wrapper>
        <Wrapper>
          <h6>General</h6>
          <p>Team</p>
          <p>Schedule</p>
          <p>Rates & Packages</p>
          <p>Contact</p>
          <FacebookIcon style={{ width: '2em', height: '2em' }} />
          <InstagramIcon style={{ width: '2em', height: '2em' }} />
        </Wrapper>
      </MainWrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  //   flex-direction: column;
  justify-content: space-around;
`;

const MainWrapper = styled.div`
  display: flex;
`;
export default Footer;
