import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import media from 'utils/media';

const NavigationLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.font.light};
    margin-top: 30px;
    font-size: 1em;
    transition: color 300ms;

    :hover {
        color: ${({theme}) => theme.colors.appleGreen};
        text-decoration: underline;
    }
    
    ${media.desktop`
        margin-right: 60px;
    `}
`;

const NavigationLinks = () => {
    return (
        <>
            <NavigationLink to="/portfolio">portfolio</NavigationLink>
            <NavigationLink to="/blog">blog</NavigationLink>
            <NavigationLink to="/about">about</NavigationLink>
            <NavigationLink to="/contact">kontakt</NavigationLink>
        </> 
    )
};

export default NavigationLinks;