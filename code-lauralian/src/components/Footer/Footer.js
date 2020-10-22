import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { colors, typography } from 'utils';
import Image from 'gatsby-image';

const FooterContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    background-color: ${colors.lemon};
`;

const WhiteLine = styled.div`
    /* height: 1px;
    width: 100vw;
    background-color: ${colors.appleGreen}; */
`;

const Copyright = styled.p`
    font-size: 0.8rem;
    color: ${colors.summerSky};
    font-weight: ${typography.fontWeightLight};
    margin: 15px;
`;

const LogoImg = styled(Image)`
    width: 40px;
    height: 40px;
    margin: 15px;
`;

const Footer = () => {

    const data = useStaticQuery(graphql`
        {
            file(name: {eq: "favicon"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
            }
        }
    `);

    return (
        <FooterContent>
            <LogoImg fluid={data.file.childImageSharp.fluid} />
            <WhiteLine />
            <Copyright>&copy; 2020 CodeLauralian</Copyright>
        </FooterContent>
    )
};
  
export default Footer;