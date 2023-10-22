import styled from 'styled-components';
import logo from './pictures/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <MainWrapper>
        <GeneralWrapper>
          <img src={logo} alt="logo" style={{ width: '4em', height: '4em' }} />
          <p>
            IA, 2000 McGill College Avenue Tower <br></br> Montreal QC H3A 3H3
          </p>
        </GeneralWrapper>
        <ClassWrapper>
          <h2>Classes</h2>
          <p>Advanced Pilates</p>
          <p>Advanced Stretching</p>
          <p>Barre Pilates</p>
          <p>Beginner Pilates</p>
          <p>Boxing</p>
          <p>Reformer Pilates</p>
          <p>Yoga</p>
        </ClassWrapper>
        <ContactWrapper>
          <h2>General</h2>
          <p>Team</p>
          <p>Schedule</p>
          <p>Rates & Packages</p>
          <p>Contact</p>
          <SvgWrapper>
            <FacebookIcon style={{ width: '2em', height: '2em' }} />
            <InstagramIcon style={{ width: '2em', height: '2em' }} />
          </SvgWrapper>
        </ContactWrapper>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 16px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const GeneralWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
const ClassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
const SvgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export default Footer;
