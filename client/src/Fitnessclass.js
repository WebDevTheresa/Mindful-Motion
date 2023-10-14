import styled from 'styled-components';
import Navbar from './NavBar';
import barre from './pictures/barre.jpg';
import boxing from './pictures/boxing.jpg';
import advancestretch from './pictures/advancestretch.jpg';
import pilates from './pictures/pilates.jpg';
import stretching from './pictures/stretching.jpg';
import yoga from './pictures/yoga.jpg';
import Footer from './Footer';

const Fitnessclass = () => {
  return (
    <div>
      <Navbar />
      <Header>Fitness Classes</Header>

      <Wrapper>
        <Img src={advancestretch} alt="fitness" />
        <Infodivodd>
          <Title>
            <Title>
              <H2> Advanced Pilates</H2>
              <h3> 45 Minutes</h3>
            </Title>
            Our Pilates class is an abdominal and back-strengthening class that
            emphasizes strengthening of all the muscles, even the full body. Its
            roots are in dance, therapy, and yoga. Participants will see an
            improvement in themselves and their bodies including more
            flexibility, more strength, better posture, a decrease in neck and
            back pain, and a less stressed feeling.
            <Span>
              Best For:{' '}
              <span>People who have taken several regular Pilates classes</span>
            </Span>
          </Title>
        </Infodivodd>
      </Wrapper>
      <Wrapper>
        <Infodiveven>
          <Title>
            <Title>
              <H2>Boxing</H2> <h3> 60 Minutes</h3>
            </Title>
            Our boxing class is a high-impact workout that sculpts by fusing
            authentic martial arts, boxing, and cardiovascular training. This
            class is designed to improve strength, endurance, and agility while
            also providing a fun and challenging workout.
            <Span>
              Best For: <span>Everyone!</span>
            </Span>
          </Title>
          <Img src={boxing} alt="fitness" />
        </Infodiveven>
      </Wrapper>
      <Wrapper>
        <Img src={yoga} alt="fitness" />
        <Infodivodd>
          <Title>
            <Title>
              <H2>Yoga</H2> <h3>45 Minutes</h3>{' '}
            </Title>
            Our yoga class is a mind/body exercise program that will deliver a
            full-body workout with an emphasis on yoga poses and core
            strengthening. Benefits include increased strength, flexibility, and
            balance, as well as reduced stress and improved mental clarity.
            <Span>
              Best For: <span>Yoga lovers</span>
            </Span>
            <Title>*Please bring your yoga mat for this class</Title>
          </Title>
        </Infodivodd>
      </Wrapper>
      <Wrapper>
        <Infodiveven>
          <Title>
            <Title>
              <H2>Advance stretching</H2> <h3>40 Minutes</h3>
            </Title>
            Our stretching class is designed to improve flexibility and
            mobility. We use a variety of stretching techniques, including
            static stretching, dynamic stretching, and foam rolling, to help our
            clients achieve their goals.
            <Span>
              Best For:
              <span>people, who is looking to increase flexibility</span>
            </Span>{' '}
          </Title>
          <Img src={stretching} atl="fitness" />
        </Infodiveven>
      </Wrapper>
      <Wrapper>
        <Img src={barre} alt="fitness" />
        <Infodivodd>
          <Title>
            <Title>
              <H2>Barre Pilates</H2> <h3>45 minutes</h3>
            </Title>
            Our Barre Pilates class combines the principles of Pilates with
            ballet-inspired movements. This class is low impact and focuses on
            toning, sculpting, and strengthening the body, while also improving
            posture and balance.
            <Span>
              Best For: <span>Barre lovers and low impact enthusiasts</span>
            </Span>
          </Title>
        </Infodivodd>
      </Wrapper>
      <Wrapper>
        <Infodiveven>
          <Title>
            <Title>
              <H2>Beginner Pilates</H2> <h3>40 Minutes</h3>
            </Title>
            This class is designed for individuals who are new to Pilates or who
            want to refresh their knowledge of the basics. Participants will
            learn proper breathing techniques, alignment, and form while
            performing exercises that target the core, arms, legs, and back.
            <Span>
              Best For:{' '}
              <span>Anyone looking to start their pilates journey</span>
            </Span>{' '}
          </Title>
          <Img src={pilates} alt="fitness" />
        </Infodiveven>
      </Wrapper>
      <Footer />
    </div>
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
    flex-direction: column;
    padding: 40px 40px;
    width: 100%;
  }
`;

const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
`;
const H2 = styled.h2`
  font-size: 45px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    // padding: 40px 40px;
    width: 100%;
  }
`;
const Infodivodd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin: 50px;
  line-height: 2em;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    // padding: 40px 40px;
    width: 100%;
  }
`;

const Infodiveven = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  line-height: 2em;
  margin: 50px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    // padding: 40px 40px;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 296px;
  height: 373px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    // height: 66%;
  }
`;

export default Fitnessclass;
