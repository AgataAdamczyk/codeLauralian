import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-content: center;
`;

const Title = styled.h1`
  text-align: right;
`;

const Paragraph = styled.p`
  text-align: right;
  line-height: 1.8;
`;

const StyledImage = styled(Image)``;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <Title>Cześć, mam na imię Agata!</Title>
      <Paragraph>Jestem Junior Front-end Developerem</Paragraph>
      <Button as={Link} to='/portfolio'>Moje portfolio</Button>
      <StyledImage fixed={data.file.childImageSharp.fixed} />
    </ContentWrapper>
  </>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {
        fixed: PropTypes.string.isRequired,
      }
    }
  }).isRequired,
};

export const query = graphql`
  {
    file(name: {eq: "IMG_0588"}) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
