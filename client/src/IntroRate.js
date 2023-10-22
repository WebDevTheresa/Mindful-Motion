import styled from 'styled-components';

const IntroRate = () => {
  return (
    <Card>
      <Container>
        <Head> 5 Classes </Head>
        <h4>
          <b>100$</b>
        </h4>
        <p>Valid for new clients only</p>
      </Container>
    </Card>
  );
};

const Card = styled.div`
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
`;
const Container = styled.div`
  //   padding: 2px 16px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Head = styled.div`
  background: black;
  color: white;
  height: 30px;
  width: 100%;
`;

// const ClassDiv = styled.div`
//   display: flex;

//   justify-content: center;

//   align-items: center;

//   background-color: black;

//   color: white;

//   height: 50px;
// `;

// const Contentsdiv = styled.div`
//   background: #f2f2f2;

//   margin: 0;

//   padding: 12px;
// `;

// const Button = styled.button`
//   border-style: none;

//   padding: 18px;

//   background: black;

//   color: white;
// `;

// const MainWrapper = styled.div`
//   //   display: flex;
// `;

export default IntroRate;
