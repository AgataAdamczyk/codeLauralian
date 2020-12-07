import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'utils/media';
import Image from 'gatsby-image';
import PageInfo from 'components/PageInfo/PageInfo';
import PropTypes from 'prop-types';

const AboutContent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`;

const AboutParagraph = styled.p`
  width: 80%;
  line-height: 2.2;

  ${media.desktop`
    width: 50%;
  `}
`;

const AboutImage = styled(Image)`
  margin: 30px 0;
  box-shadow: 9px 9px 20px -17px black;
  max-width: 80%;
  max-height: 80%;

  ${media.desktop`
    max-width: 100%;
    max-height: 100%;
  `}
`;

const AboutPage = ({ data }) => (
  <>
    <PageInfo 
      title={data.datoCmsAbout.title} 
      paragraph={data.datoCmsAbout.aboutContent}
    />
    <AboutContent>
      {data.datoCmsAbout.aboutmeContent.map(item => {
        const itemKey = Object.keys(item)[1];

        switch (itemKey) {
          case 'paragraphContent':
            return <AboutParagraph>{item[itemKey]}</AboutParagraph>;
          case 'imageData':
            return <AboutImage key={item.id} fixed={item[itemKey].fixed} />;
          default:
            return null;
        }
      })}
    </AboutContent>
  </>
);

AboutPage.propTypes = {
  data: PropTypes.shape({
    datoCmsAbout: {
      title: PropTypes.string.isRequired,
      aboutContent: PropTypes.string.isRequired,
      aboutPhoto: {
        fixed: PropTypes.object.isRequired,
      }
    }
  }).isRequired,
};

export const query = graphql`
  {
    datoCmsAbout {
      title
      aboutmeContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fixed {
              ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;