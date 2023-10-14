import react from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';
import logo from './pictures/logo.png';
import Footer from './Footer';
import instructor1 from './pictures/instructor1.jpg';
import instructor2 from './pictures/instructor2.jpg';
import instructor3 from './pictures/instructor3.jpg';
import instructor4 from './pictures/instructor4.jpg';
import instructor5 from './pictures/instructor5.jpg';
import instructor6 from './pictures/instructor6.jpg';

const TeamsPage = () => {
  return (
    <div>
      <Navbar />
      <Header>Our Team</Header>{' '}
      <Wrapper>
        {/* <Biodiv> */}
        <LeadImg src={instructor6} alt="fitness instructor" />
        <LeadDescription>
          <H3>Sarah Thompson</H3> <Intro>Lead Instructor | Founder | </Intro>{' '}
          Meet Sarah Thompson, the dedicated founder and lead Pilates instructor
          at Mindful Motion, a sanctuary she envisioned and brought to life with
          her passion for holistic well-being. With over 15 years of experience
          in the fitness industry, Sarah's journey began as a Pilates enthusiast
          and later evolved into a profound commitment to helping others
          transform their lives through mindful movement.
          <br />
          <br />
          In 2010, Sarah established Mindful Motion, a studio nestled in the
          heart of our community, with the vision of creating a space where
          individuals of all ages and backgrounds could embark on a
          transformative wellness journey. At Mindful Motion, Sarah has
          meticulously curated a serene environment that fosters physical
          strength, mental clarity, and emotional balance. The studio boasts
          state-of-the-art Pilates equipment and offers a diverse range of
          classes, from classical Pilates to specialized sessions tailored for
          rehabilitation and advanced athletic training.
          <br />
          <br />
          As a compassionate Pilates instructor, Sarah is dedicated to guiding
          her clients toward their health and fitness goals with a focus on
          mindfulness and body awareness. Her teaching philosophy revolves
          around the fusion of traditional Pilates principles with modern
          techniques, ensuring that each session is both challenging and
          rejuvenating. Under her guidance, members of Mindful Motion not only
          experience physical transformation but also cultivate a deep sense of
          mindfulness and self-acceptance.
        </LeadDescription>{' '}
        {/* </Biodiv> */}
      </Wrapper>
      <Wrapper>
        <Biodiv>
          <Img src={instructor2} alt="fitness instructor" />
          <H3>Patricia Liao</H3> <Intro>Yoga Instructor</Intro>{' '}
          <Description>
            Patricia Liao is a yoga instructor with over 20 years of experience.
            She started practicing yoga in 2000 to ease chronic pain and
            discovered the benefits of a balanced yoga practice. Patricia's
            classes focus on alignment, breath, and mindfulness, and she
            encourages her students to find their own unique expression of each
            pose.
          </Description>{' '}
        </Biodiv>

        <Biodiv>
          <Img src={instructor4} alt="fitness instructor" />
          <H3>Sarah Johnson</H3> <Intro>Stretching</Intro>{' '}
          <Description>
            Sarah Johnson is a certified personal trainer and stretching coach
            with a passion for helping her clients improve their flexibility and
            mobility. She uses a variety of stretching techniques, including
            static stretching, dynamic stretching, and foam rolling, to help her
            clients achieve their goals. Sarah's approach to fitness is to help
            her clients move better and feel better in their bodies.
          </Description>{' '}
        </Biodiv>
        {/* <Wrapper> */}
        <Biodiv>
          <Img src={instructor1} alt="fitness instructor" />
          <H3>David Lee</H3> <Intro>Boxing Instuctor</Intro>{' '}
          <Description>
            David Lee is a boxing instructor with over 10 years of experience.
            He has a black belt in Taekwondo and has trained in other martial
            arts, including Muay Thai and Brazilian Jiu-Jitsu. David's classes
            focus on technique, discipline, and self-defense, and he encourages
            his students to develop their physical and mental strength.
          </Description>{' '}
        </Biodiv>
      </Wrapper>
      <Wrapper>
        <Biodiv>
          <Img src={instructor3} alt="fitness instructor" />
          <H3>Emily Davis</H3> <Intro>Barre Pilates Instructor</Intro>{' '}
          <Description>
            Emily Davis is a certified Pilates and Barre instructor with a
            background in dance. She has been teaching at Reformation Fitness
            for over 5 years and specializes in Barre Pilates, which combines
            the principles of Pilates with ballet-inspired movements. Emily's
            classes focus on toning, sculpting, and strengthening the body,
            while also improving posture and balance.
          </Description>{' '}
        </Biodiv>
        {/* </Wrapper> */}
        <Biodiv>
          <Img src={logo} alt="fitness instructor" />
          <H3>Misha Beltes</H3>{' '}
          <Intro>Strength and Conditioning Instructor</Intro>{' '}
          <Description>
            Mish Beltes is a certified personal trainer and strength and
            conditioning coach with over 15 years of experience. She has worked
            with clients of all ages and fitness levels, from beginners to
            professional athletes. Misha's approach to fitness is to help her
            clients build strength, improve their endurance, and achieve their
            goals through a combination of resistance training, cardio, and
            functional movements.
          </Description>{' '}
        </Biodiv>

        <Biodiv>
          <Img src={instructor5} alt="fitness instructor" />
          <H3>Rachel Brown</H3> <Intro>Cardio Instructor</Intro>{' '}
          <Description>
            Rachel Brown is a certified personal trainer and cardio instructor
            with a passion for helping her clients improve their cardiovascular
            health. She teaches a variety of cardio classes, including cycling,
            HIIT, and dance fitness. Rachel's approach to fitness is to make it
            fun and accessible for everyone, regardless of their fitness level
            or experience.
          </Description>{' '}
        </Biodiv>
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
`;

const LeadDescription = styled.span`
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;

  padding: 20px;
  line-height: 1.4em;

  @media only screen and (max-width: 768px) {
    body {
      margin: 20px;
      width: 50%;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin: 25px 10px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    // padding: 40px 40px;
    width: 100%;
  }
`;

const Biodiv = styled.div`
  padding: 10px 40px;
  width: 33%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LeadImg = styled.img`
  height: 40em;
  // height: auto;
  // width: 100%;
  // max-width: 100%;
  @media only screen and (max-width: 768px) {
    body {
      max-width: 100%;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 66%;
  max-width: 100%;
  @media only screen and (min-width: 768px) {
    max-width: 100%;
    height: 66%;
  }
`;

const Intro = styled.p`
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;
const Description = styled.div`
  width: 22em;
  line-height: 1.7em;
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
`;

const H3 = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
`;
export default TeamsPage;
