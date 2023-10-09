import styled from 'styled-components';
import { useState } from 'react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div>
      <Wrapper>
        <Button>Team</Button>
        <Button onClick={() => setShowDropdown(!showDropdown)}>
          Class {selectedOption ? `(${selectedOption})` : ''}
          {showDropdown && (
            <Dropdown>
              <Option onClick={() => handleOptionClick('Option 1')}>
                Fitness Classes
              </Option>
              <Option onClick={() => handleOptionClick('Option 2')}>
                Reformer Pilates
              </Option>
            </Dropdown>
          )}
        </Button>
        <Button>Rates </Button> <Button>Schedule</Button>
        <Button>Contact</Button> <IntroButton>Intro Offer </IntroButton>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button`
  background: none;
  justify-content: space-between;
  align-items: center;
  border: none;
  transition-timing-function: ease-in;
  transition: width 0.8s;
  height: 30px;
  width: 80px;
  padding: 10px;
  position: relative;
  &:hover {
    width: 100px;
    background-color: black;
    color: white;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid black;
  border-radius: 12px;
  background-color: white;
  padding: 5px;
`;

const IntroButton = styled.button`
  background: black;
  color: white;
`;

const Option = styled.div`
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: lightgray;
  }
`;
export default Navbar;
