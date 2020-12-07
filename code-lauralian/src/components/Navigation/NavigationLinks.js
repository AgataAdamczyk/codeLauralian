import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import media from 'utils/media';
import PropTypes from 'prop-types';

const NavigationLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.font.light};
    margin-top: 30px;
    font-size: 1em;
    transition: all .3s;

    :hover {
        padding: 12px 16px;
        background-color: ${({theme}) => theme.colors.white};
        border: 2px solid ${({theme}) => theme.colors.appleGreen};
        border-radius: 6px;
        color: ${({theme}) => theme.colors.appleGreen};
        font-weight: ${({theme}) => theme.font.medium};

        ${media.desktop`
            color: ${({theme}) => theme.colors.appleGreen};
            text-decoration: underline;
            border: none;
        `}
    }
    
    ${media.desktop`
        margin-right: 60px;
    `}
`;

const NavigationLinks = ({ setNavbarOpen }) => {
    return (
        <>
            <NavigationLink onClick={() => setNavbarOpen()} to="/portfolio">portfolio</NavigationLink>
            <NavigationLink onClick={() => setNavbarOpen()} to="/blog">blog</NavigationLink>
            <NavigationLink onClick={() => setNavbarOpen()} to="/about">about</NavigationLink>
            <NavigationLink onClick={() => setNavbarOpen()} to="/contact">kontakt</NavigationLink>
        </> 
    )
};

NavigationLinks.propTypes = {
    setNavbarOpen: PropTypes.func.isRequired
};

export default NavigationLinks;