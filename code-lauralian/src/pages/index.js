import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  padding: 50px 0;
  width: 50%;
  position: relative;
  text-align: right;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-end; 

  h1 {
    font-size: 30px;
    /* margin: 0;
    width: 40%; */
    line-height: 0.98;
  }

  p {
    margin: 20px 0 40px;
    /* width: 40%;  */
  }
`;

const StyledImage = styled(Image)`
  position: absolute; 
  top: 60;
  right: 60;
  /* width: 35%; */
  /* height: 90vh; */
  /* object-fit: cover; */
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Cześć, mam na imię Agata!</h1>
      <p>Jestem Junior Front-end Developerem</p>
      <Button as={Link} to='/portfolio'>Moje portfolio</Button>
    </ContentWrapper>
    <StyledImage fixed={data.file.childImageSharp.fixed} />
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
