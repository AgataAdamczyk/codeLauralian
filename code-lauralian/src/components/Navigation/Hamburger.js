import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerWrapper = styled.button`
  display: inline-block;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.lemon};
  border: 1px solid ${({theme}) => theme.colors.lemon};
  border-radius: 6px;
  padding: 8px 6px;
  transition: transform .4s ease-in-out;
  transform: ${props => props.open ? "translate(45px)" : "translate(40px)"};
  z-index: 999;
  position: absolute;
  top: -30px;
  left: 0;
`;

const HamburgerBox = styled.span`
  width: 30px;
  height: 20px;
  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${props => props.open ? "transparent" : "black"};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: transform .2s .2s ease-in-out; 

  ::before,
  ::after {
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.colors.black};
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
    <HamburgerWrapper open={open} >
      <HamburgerBox>
        <HamburgerInner open={open} />
      </HamburgerBox>
    </HamburgerWrapper>
  )
};

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Hamburger;