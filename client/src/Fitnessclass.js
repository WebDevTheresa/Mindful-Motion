import styled from 'styled-components';
import Navbar from './NavBar';
import barre from './pictures/barre.jpg';
import boxing from './pictures/boxing.jpg';
import advancestretch from './pictures/advancestretch.jpg';
import pilates from './pictures/pilates.jpg';
import stretching from './pictures/stretching.jpg';
import yoga from './pictures/yoga.jpg';

const Fitnessclass = () => {
  return (
    <div>
      <Navbar />
      <Header>Fitness Classes</Header>
      <Bodywrapper>
        <Wrapper>
          <Imgdiv src={advancestretch} alt="fitness" />
          <Infodivodd>
            <h2> Advanced Pilates</h2>
            <h3> 45 Minutes</h3>
            <div>
              {/* <p> */}
              Our Pilates class is an abdominal and back-strengthening class
              that emphasizes strengthening of all the muscles, even the full
              body. Its roots are in dance, therapy, and yoga. Participants will
              see an improvement in themselves and their bodies including more
              flexibility, more strength, better posture, a decrease in neck and
              back pain, and a less stressed feeling.
              {/* </p> */}
            </div>
          </Infodivodd>
        </Wrapper>
        <Wrapper>
          <Imgdiv src={boxing} alt="fitness" />
          <Infodiveven>
            <h2>Boxing</h2> <h3> 60 Minutes</h3>
            <p>
              Our boxing class is a high-impact workout that sculpts by fusing
              authentic martial arts, boxing, and cardiovascular training. This
              class is designed to improve strength, endurance, and agility
              while also providing a fun and challenging workout.
            </p>
          </Infodiveven>
        </Wrapper>
        <Wrapper>
          <Imgdiv src={yoga} alt="fitness" />
          <Infodivodd>
            <h2>Yoga</h2> <h3>45 Minutes</h3>{' '}
            <p>
              Our yoga class is a mind/body exercise program that will deliver a
              full-body workout with an emphasis on yoga poses and core
              strengthening. Benefits include increased strength, flexibility,
              and balance, as well as reduced stress and improved mental
              clarity.
            </p>
            <p>*Please bring your yoga mat for this class</p>
          </Infodivodd>
        </Wrapper>
        <Wrapper>
          <Imgdiv src={stretching} atl="fitness" />
          <Infodiveven>
            <h2>Advance stretching</h2> <h3>40 Minutes</h3>
            <p>
              Our stretching class is designed to improve flexibility and
              mobility. We use a variety of stretching techniques, including
              static stretching, dynamic stretching, and foam rolling, to help
              our clients achieve their goals.
            </p>
          </Infodiveven>
        </Wrapper>
        <Wrapper>
          <Imgdiv src={barre} alt="fitness" />
          <Infodivodd>
            <h2>Barre Pilates</h2> <h3>45 minutes</h3>
            <p>
              Our Barre Pilates class combines the principles of Pilates with
              ballet-inspired movements. This class is low impact and focuses on
              toning, sculpting, and strengthening the body, while also
              improving posture and balance.
            </p>
          </Infodivodd>
        </Wrapper>
        <Wrapper>
          <Imgdiv src={pilates} alt="fitness" />
          <Infodiveven>
            <h2>Beginner Pilates</h2> <h3>40 Minutes</h3>
            <p>
              This class is designed for individuals who are new to Pilates or
              who want to refresh their knowledge of the basics. Participants
              will learn proper breathing techniques, alignment, and form while
              performing exercises that target the core, arms, legs, and back.
            </p>
          </Infodiveven>
        </Wrapper>
      </Bodywrapper>
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
`;
const Bodywrapper = styled.div`   

const Imgdiv = styled.img`; // height:400px; // width:350px; // `

const Wrapper = styled.div`
  margin: 50px;
`;
const Infodivodd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 500px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;

const Infodiveven = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 500px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;

const Imgdiv = styled.img`
  height: 25em;

  //   width: 100%;
  //   height: auto;
  //   max-width: 100%;
`;

export default Fitnessclass;
