import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Decor = styled.span`
  font-size: 30px;
  color: ${({theme}) => theme.colors.lemon};
  margin: 10px;
`;

const Title = styled.h1`
  width: 50%;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 50%;
  text-align: justify;
  line-height: 1.8;
`;

const StyledImage = styled(Img)`
  margin: 20px;
`;

const AboutPage = ({ data }) => (
  <PageWrapper>
    <Title>{data.datoCmsAbout.title}</Title>
    <Decor>. . .</Decor>
    <Paragraph>{data.datoCmsAbout.aboutContent}</Paragraph>
    <StyledImage fixed={data.datoCmsAbout.photo.fixed}/>
  </PageWrapper>
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