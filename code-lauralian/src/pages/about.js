import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ContextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px;
`;

const Title = styled.h1`
  grid-column: 1;
`;

const Paragraph = styled.p`
  grid-column: 1;
`;

const StyledImage = styled(Img)`
  grid-column: 2;
  /* width: 35%; */
  /* height: 100vh; */
  /* object-fit: cover; */
`;

const AboutPage = ({ data }) => (
  <ContextWrapper>
    <Title>{data.datoCmsAbout.title}</Title>
    <Paragraph>{data.datoCmsAbout.aboutContent}</Paragraph>
    <StyledImage fixed={data.datoCmsAbout.photo.fixed}/>
  </ContextWrapper>
);

AboutPage.propTypes = {
  data: PropTypes.shape({
    datoCmsAbout: {
      title: PropTypes.string.isRequired,
      aboutContent: PropTypes.string.isRequired,
      aboutPhoto: {
        fixed: PropTypes.string.isRequired,
      }
    }
  }).isRequired,
};

export const query = graphql`
  {
    datoCmsAbout {
      title
      aboutContent
      photo {
        fixed(height: 600) {
          ...GatsbyDatoCmsFixed_noBase64
        }
      }
    }
  }
`;

export default AboutPage;