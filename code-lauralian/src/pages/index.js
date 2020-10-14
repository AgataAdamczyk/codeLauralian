import React from 'react';
import { graphql } from "gatsby";
import styled from 'styled-components';
import Image from 'gatsby-image';
import Button from '../components/Button/Button';

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  text-align: right;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    margin: 0;
    /* width: 40%;
    line-height: 0.9; */
  }

  p {
    margin: 20px 0 40px;
    /* width: 40%; */
  }
`;

const StyledImage = styled(Image)`
  position: absolute; 
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Cześć, mam na imię Agata!</h1>
      <p>Jestem Junior Front-end Developerem</p>
      <Button>Moje portfolio</Button>
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </>
);

export const query = graphql`
  {
    file(name: {eq: "IMG_0588"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage;
