import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import github from 'assets/images/github.svg';
import linkedin from 'assets/images/linkedin.svg';
import facebook from 'assets/images/facebook.svg';
import instagram from 'assets/images/instagram.svg';

const MediaWrapper = styled.nav`
    padding: 15px;
    position: absolute;
    top: 0px;
    right: 30px;
    display: flex;
    flex-direction: row;
`;

const MenuItem = styled(Link)``;

const MediaIcon = styled.img`
    color: black;
    width: 15px;
    height: 15px;
    margin-right: 15px;
`;

const Media = () => (
    <MediaWrapper>
        <MenuItem to="https://github.com/AgataAdamczyk" target="_blank">
            <MediaIcon src={github} alt='github'/> 
        </MenuItem>
        <MenuItem to="https://www.linkedin.com/in/agata-adamczyk-a8289117a/" target="_blank">
            <MediaIcon src={linkedin} alt='linkedin'/>
        </MenuItem>
        <MenuItem to="https://www.facebook.com/lauralian/" target="_blank">
            <MediaIcon src={facebook} alt='facebook'/> 
        </MenuItem>
        <MenuItem to="https://www.instagram.com/codelauralian/?hl=pl" target="_blank">
            <MediaIcon src={instagram} alt='instagram'/>
        </MenuItem>
    </MediaWrapper>
);

export default Media;