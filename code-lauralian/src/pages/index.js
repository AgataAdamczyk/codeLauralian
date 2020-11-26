import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 600px);
  grid-template-rows: 1fr 60px 60px 40px 1fr;
  grid-gap: 30px 70px;
  padding: 100px 0;
  align-items: center;
  justify-content: center;
  justify-items: right;
`;

const Title = styled.h1`
  font-weight: ${({theme}) => theme.font.bold};
  grid-column: 1/2;
  grid-row: 2/3;
`;

const Paragraph = styled.p`
  grid-column: 1/2;
  grid-row: 3/4;
`;

const HeroImage = styled(Image)`
  position: relative;
  grid-column: 2/-1;
  grid-row: 1/-1;
  border-radius: 50%;
  box-shadow: 9px 9px 20px -17px black;
`;

const Attention = styled.div`
  position: absolute;
  width: 170px;
  height: 60px;
  background-color: ${({theme}) => theme.colors.lemon};
  border-radius: 5px;
  transform: rotate(-6deg);
  left: 780px;
  top: 410px;
  z-index: -1;
`;

const HeroButton = styled(Button)`
  grid-column: 1/2;
  grid-row: 4/5;
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <Title>Cześć, mam na imię Agata!</Title>
      <Paragraph>Jestem Junior Front-end Developerem</Paragraph>
      <HeroButton as={Link} to='/portfolio'>Moje portfolio</HeroButton>
      <HeroImage fixed={data.file.childImageSharp.fixed} />
      <Attention />
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
    file(name: {eq: "hero"}) {
      childImageSharp {
        fixed(height: 600) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
