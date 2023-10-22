import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import logo from './pictures/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <MobileMenuButton onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuButton>
      <Wrapper isOpen={isOpen}>
        <img src={logo} alt="logo" style={{ width: '4em', height: '4em' }} />
        <LINK to="/TeamsPage">
          <Button>Team</Button>
        </LINK>
        <Dropdown />
        <LINK to="/Rates">
          <Button>Rates </Button>
        </LINK>
        <Button>Schedule</Button>
        <LINK to="/Contact">
          <Button>Contact</Button>
        </LINK>
        <IntroButton>Intro Offer </IntroButton>
      </Wrapper>
    </div>
  );
};

const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 3px 0;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
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

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const IntroButton = styled.button`
  background: black;
  color: white;
  border-style: none;
  font-size: 19px;
  margin-top: 10px;
  padding: 12px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const LINK = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default Navbar;
