import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import media from 'utils/media';
import Image from 'gatsby-image';

const LogoWrapper = styled(Link)`
    margin: auto 0;

    ${media.desktop`
        margin-right: 10px; 
    `}
`;

const LogoImg = styled(Image)`
  width: 12vw;
`;

const Logo = () => {
    const data = useStaticQuery(graphql`
    {
        file(name: {eq: "logo_new"}) {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
        }
    }
    `);

  return (
    <LogoWrapper to='/' >
        <LogoImg fluid={data.file.childImageSharp.fluid} alt="logo"/>
    </LogoWrapper>
  )
}

export default Logo; 