import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerWrapper = styled.button`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin: 0;
  transition: transform .3s ease-in-out;
  transform: ${props => props.open ? "translate(250px)" : "translate(50px)"};
`;

const HamburgerBox = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${props => props.open ? "transparent" : "black"};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: transform .2s .2s ease-in-out; 

  ::before,
  ::after {
    width: 100%;
    height: 3px;
    background-color: black;
    content: '';
    left: 0;
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    top: -10px;
    transform: ${props => (props.open ? "translateY(10px) rotate(45deg)" : "rotate(0deg)")};
  }

  ::after {
    top: 10px;
    transform: ${props => (props.open ? "translateY(-10px) rotate(-45deg)" : "rotate(0deg)")};
  }
`;

const Hamburger = ({ open }) => {
  return(
    <HamburgerWrapper open={open}>
      <HamburgerBox>
        <HamburgerInner open={open}/>
      </HamburgerBox>
    </HamburgerWrapper>
  )
};

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Hamburger;