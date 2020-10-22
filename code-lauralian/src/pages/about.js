import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

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

AboutPage.propTypes = {
  data: PropTypes.shape({
    datoCmsAbout: {
      title: PropTypes.string.isRequired,
      aboutContent: PropTypes.string.isRequired,
      aboutPhoto: {
        fluid: PropTypes.string.isRequired,
      }
    }
  }).isRequired,
};

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