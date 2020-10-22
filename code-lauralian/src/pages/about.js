import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledImage = styled(Img)`
  position: absolute; 
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`;

const AboutPage = ({ data }) => (
  <>
    <h1>{data.datoCmsAbout.title}</h1>
    <p>{data.datoCmsAbout.aboutContent}</p>
    <StyledImage fluid={data.datoCmsAbout.aboutPhoto.fluid}/>
  </>
);

export const query = graphql`
  {
    datoCmsAbout {
      title
      aboutContent
      aboutPhoto {
        fluid(maxHeight: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;