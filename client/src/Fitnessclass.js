import './styles.css';
import styled from 'styled-components';

const Fitnessclass = () => {
  return (
    <div>
      <Header>Fitness Class</Header>
      <Bodywrapper>
        <Wrapper>
          {/* <Imgdiv>img</Imgdiv> */}
          <Infodiv>
            <div>
              <h2> Advanced Pilates</h2>
            </div>
            <h3> 45 Minutes</h3>
            <p>
              Our Pilates class is an abdominal and back-strengthening class
              that emphasizes strengthening of all the muscles, even the full
              body. Its roots are in dance, therapy, and yoga. Participants will
              see an improvement in themselves and their bodies including more
              flexibility, more strength, better posture, a decrease in neck and
              back pain, and a less stressed feeling.
            </p>
          </Infodiv>
        </Wrapper>
        <Wrapper>
          {/* <Imgdiv>img</Imgdiv> */}
          <Infodiv>
            <h2>Boxing</h2> <h3> 60 Minutes</h3>
            <p>
              Our boxing class is a high-impact workout that sculpts by fusing
              authentic martial arts, boxing, and cardiovascular training. This
              class is designed to improve strength, endurance, and agility
              while also providing a fun and challenging workout.
            </p>
          </Infodiv>
        </Wrapper>
        <Wrapper>
          {/* <Imgdiv>img</Imgdiv> */}
          <Infodiv>
            <h2>Yoga</h2> <h3>45 Minutes</h3>{' '}
            <p>
              Our yoga class is a mind/body exercise program that will deliver a
              full-body workout with an emphasis on yoga poses and core
              strengthening. Benefits include increased strength, flexibility,
              and balance, as well as reduced stress and improved mental
              clarity.
            </p>
            <p>*Please bring your yoga mat for this class</p>
          </Infodiv>
        </Wrapper>
        <Wrapper>
          {/* <Imgdiv>img</Imgdiv> */}
          <Infodiv>
            <h2>Advance stretching</h2> <h3>40 Minutes</h3>
            <p>
              Our stretching class is designed to improve flexibility and
              mobility. We use a variety of stretching techniques, including
              static stretching, dynamic stretching, and foam rolling, to help
              our clients achieve their goals.
            </p>
          </Infodiv>
        </Wrapper>
        <Wrapper>
          {/* <Imgdiv>img</Imgdiv> */}
          <Infodiv>
            <h2>Barre Pilates</h2> <h3>45 minutes</h3>
            <p>
              Our Barre Pilates class combines the principles of Pilates with
              ballet-inspired movements. This class is low impact and focuses on
              toning, sculpting, and strengthening the body, while also
              improving posture and balance.
            </p>
          </Infodiv>
        </Wrapper>
        <Wrapper>
          {/* <Imgdiv>img</Imgdiv> */}
          <Infodiv>
            <h2>Beginner Pilates</h2> <h3>40 Minutes</h3>
            <p>
              This class is designed for individuals who are new to Pilates or
              who want to refresh their knowledge of the basics. Participants
              will learn proper breathing techniques, alignment, and form while
              performing exercises that target the core, arms, legs, and back.
            </p>
          </Infodiv>
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
const Infodiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
`;

export default Fitnessclass;
