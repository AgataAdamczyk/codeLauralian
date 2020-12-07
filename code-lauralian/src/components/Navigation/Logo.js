import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import media from 'utils/media';
import Image from 'gatsby-image';

const LogoWrapper = styled(Link)`
  position: relative;

  ${media.desktop`
    margin-right: 10px; 
  `}
`;

const LogoImg = styled(Image)`
  max-width: 200px;
  position: absolute;
  top: 10px;
  left: 30%;

  ${media.desktop`
    width: 30vw;
    top: 15px;
    left: 15px;
  `}
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
    <LogoWrapper to='/'>
      <LogoImg fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrapper>
  )
};

export default Logo; 