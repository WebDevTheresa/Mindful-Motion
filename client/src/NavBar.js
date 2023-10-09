import styled from 'styled-components';
import { useState } from 'react';
import Dropdown from './Dropdown';
import logo from './pictures/logo.png';

const Navbar = () => {
  return (
    <div>
      <Wrapper>
        <img src={logo} alt="logo" style={{ width: '4em', height: '4em' }} />
        <Button>Team</Button>
        <Dropdown />

        <Button>Rates </Button>
        <Button>Schedule</Button>
        <Button>Contact</Button>
        <IntroButton>Intro Offer </IntroButton>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Button = styled.button`
  font-family: IBM Plex Sans, sans-serif;
  background: none;
  justify-content: space-between;
  align-items: center;
  border: none;
  transition-timing-function: ease-in;
  transition: width 0.8s;
  height: 64px;
  width: 80px;
  padding: 8px 14px;
  font-size: 19px;
  position: relative;
  &:hover {
    width: 100px;
    background-color: black;
    color: white;
  }
`;

const IntroButton = styled.button`
  background: black;
  color: white;
  border-style: none;
  font-size: 19px;
`;

export default Navbar;
