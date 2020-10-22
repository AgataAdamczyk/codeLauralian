import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 120px);
  text-align: right;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    margin: 0;
    width: 40%;
    line-height: 0.98;
  }

  p {
    margin: 20px 0 40px;
    width: 40%;
  }
`;

const StyledImage = styled(Image)`
  position: absolute; 
  top: 30;
  right: 0;
  /* width: 35%; */
  height: 90vh;
  /* object-fit: cover; */
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Cześć, mam na imię Agata!</h1>
      <p>Jestem Junior Front-end Developerem</p>
      <Button>Moje portfolio</Button>
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
        fixed(height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
