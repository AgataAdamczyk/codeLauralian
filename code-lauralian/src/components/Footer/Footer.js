import React from 'react';
import styled from 'styled-components';
import Media from 'components/Media/Media';

const FooterContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    background-color: ${({theme}) => theme.colors.lemon};
`;

const Copyright = styled.p`
    font-size: 0.8rem;
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.thin};
    margin: 15px;
`;

const Footer = () => (
    <FooterContent>
        <Copyright>Created in GatsbyJS &copy; 2020 CodeLauralian</Copyright>
        <Media/>
    </FooterContent>
);
  
export default Footer;