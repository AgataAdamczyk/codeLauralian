import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import media from 'utils/media';
import Image from 'gatsby-image';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  display: flex;
  padding: 80px 20px; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  ${media.desktop`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 60px 60px 40px 1fr;
    grid-gap: 25px 60px;
    padding: 150px 25px;
    justify-items: right;
  `}
`;

const Title = styled.h1`
  font-weight: ${({theme}) => theme.font.bold};
  font-size: 1.5em;

  ${media.desktop`
    grid-column: 1/2;
    grid-row: 2/3;
    font-size: 2em;
    justify-self: right;
  `}
`;

const Paragraph = styled.p`
  font-size: .8em;

  ${media.desktop`
    grid-column: 1/2;
    grid-row: 3/4;
    font-size: 1.2em;
    justify-self: right;
  `}
`;

const HeroImage = styled(Image)`
  min-width: 200px;
  border-radius: 50%;
  box-shadow: 9px 9px 20px -17px ${({theme}) => theme.colors.black};

  ${media.tablet`
    min-width: 400px;
  `}
  
  ${media.desktop`
    min-width: 570px;
    grid-column: 2/-1;
    grid-row: 1/-1;
    justify-self: left;
  `}
`;

const HeroButton = styled(Button)`


  ${media.desktop`
    grid-column: 1/2;
    grid-row: 4/5;
  `}
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <Title>Cześć, mam na imię Agata!</Title>
      <Paragraph>Jestem Junior Front-end Developerem</Paragraph>
      <HeroButton as={Link} to='/portfolio'>Moje portfolio</HeroButton>
      <HeroImage fluid={data.file.childImageSharp.fluid} />
    </ContentWrapper>
  </>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {
        fluid: PropTypes.object.isRequired,
      }
    }
  }).isRequired,
};

export const query = graphql`
  {
    file(name: {eq: "hero"}) {
      childImageSharp {
        fluid(maxWidth: 570, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
