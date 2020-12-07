import React, { useState } from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import Logo from 'components/Navigation/Logo';
import Media from 'components/Media/Media';
import Hamburger from 'components/Navigation/Hamburger';
import NavigationLinks from 'components/Navigation/NavigationLinks';

const NavigationWrapper = styled.nav`
    position: fixed;
    height: 15vh;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: white;
    z-index: 1;
    border-bottom: 1px solid ${({theme}) => theme.colors.appleGreen};
    box-shadow: 0 10px 20px -15px ${({theme}) => theme.colors.lemon};
   
    ${media.desktop`
        display: flex;
        height: 13vh;
        position: fixed;
        top: 0;
        left: 0;
        padding: 20px;
    `}
`;

const ToggleMenu = styled.div`
    display: flex;
    position: relative;

    ${media.desktop`
        display: none;
        cursor: pointer; 
    `}
`;

const NavigationBox = styled.div`
    height: 40vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.lemon};
    transition: all .3s ease-in-out;
    transform: ${props => props.open ? "translateX(-1500px)" : "translate(0px)"};

  ${media.desktop`
        height: 100%;
        width: 50vw;
        background-color: ${({theme}) => theme.colors.white};
        position: relative;
        flex-direction: row;
        transform: translateX(20px);
  `}
`;

const NavigationMedia = styled(Media)`
    position: absolute;
    display: ${props => props.nav ? "20px" : "0"};
    border: 1px solid red;
`;

const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <NavigationWrapper>
            <Logo />
            <ToggleMenu
                navbarOpen={navbarOpen} 
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open/> : <Hamburger />}
            </ToggleMenu> 

            {navbarOpen ? (
                <NavigationBox>
                    <NavigationLinks />
                </NavigationBox> 
            ) : (
                <NavigationBox open > 
                    <NavigationLinks setNavbarOpen={setNavbarOpen} />
                </NavigationBox>
            )}
            <NavigationMedia nav/>
        </NavigationWrapper> 
    )
};

export default Navigation;