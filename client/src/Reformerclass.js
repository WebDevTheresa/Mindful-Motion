import styled from 'styled-components';
import IntroOffer from './IntroOffer';
import NavBar from './NavBar';
import Footer from './Footer';
import reform1 from './pictures/reform1.jpg';
import reform2 from './pictures/reform2.jpg';
import reform3 from './pictures/reform3.jpg';

const Reformerclass = () => {
  return (
    <div>
      {' '}
      <NavBar />
      <Wrapper>
        <Header>Reformer Pilates</Header>
        <Title>
          Our mission is to create a nurturing space where individuals of all
          fitness levels can embark on a journey of self-discovery, strength,
          and mindfulness. We believe in the profound connection between body
          and mind. Through expert guidance, innovative techniques, and a
          supportive community, we empower our clients to enhance their physical
          strength, flexibility, and balance. <br></br> <br></br>Our reformer
          classes, infused with creativity and precision, offer not just a
          workout, but an experience that revitalizes the body, uplifts the
          spirit, and centers the mind. At Mindful Motion Pilates, we prioritize
          personalized attention, ensuring each participant receives tailored
          instruction and encouragement. We strive to cultivate an atmosphere of
          positivity, inclusivity, and encouragement, where every achievement is
          celebrated, and every challenge is met with unwavering support.
        </Title>
        <InfoDiv>
          <Img src={reform1} alt="fitness" />
          <div>
            <P>
              <H2>Beginner Basics (Level 1)</H2>
              <H3> 45 Mins</H3>
              This class is designed for new Pilates students and all levels are
              welcome. It is an alignment-based class where you will learn to
              apply and embody the core principles of Pilates movement. The
              class will focus on strength, stability, posture, proper breath
              control, and flexibility. It is a full-body movement experience
              that will tone, strengthen, lengthen, and engage all the big and
              small core muscles of the body
            </P>
          </div>
        </InfoDiv>
        <InfoDiv>
          <Img src={reform2} alt="fitness" />
          <div>
            <P>
              <H2>Advanced Athletic (Level 3)</H2>
              <H3> 40 Mins</H3>
              Experience the fusion of Pilates and rhythm in this energetic
              reformer class. Move to the beat, flow with precision, and let the
              music inspire your movements. Our Reformer Rhythm class not only
              challenges your muscles but also adds a touch of dance-like
              fluidity to your workout. Get ready to groove, tone, and elevate
              your Pilates experience to a whole new level.
            </P>
          </div>
        </InfoDiv>
        <InfoDiv>
          <Img src={reform3} alt="fitness" />
          <div>
            <P>
              <H2>Fusion Flow (All Levels)</H2>
              <H3>45 Mins</H3>
              Explore the art of seamless movement in our Reformer Fusion Flow
              class. This class combines elements of Pilates, yoga, and strength
              training to create a harmonious fusion of exercises. Strengthen
              your core, improve your posture, and enhance your flexibility as
              you flow through a series of carefully curated movements. Let the
              fusion of techniques guide you toward a balanced, aligned, and
              revitalized body.
            </P>
          </div>
        </InfoDiv>
      </Wrapper>
      <IntroOffer />
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    // flex-direction: column;
    // padding: 40px 40px;
    // height: 72px;
    width: 100%;
    // display: block;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;
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
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    // padding: 40px 40px;

    width: 100%;
    display: block;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 373px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    // height: 66%;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  margin: 40px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;

const P = styled.p`
  margin: 60px;
  line-height: 1.8em;
`;

const H2 = styled.h2`
  font-size: 32px;

  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;

const H3 = styled.h3`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;

export default Reformerclass;
