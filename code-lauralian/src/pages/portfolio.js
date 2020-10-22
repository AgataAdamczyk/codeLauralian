import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PageInfo from '../components/PageInfo/PageInfo';
import ArticlePreview from '../components/ArticlePreview/ArticlePreview';
import slugify from 'slugify';

const ArticesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
`;

const pageData = {
  title: 'Portfolio',
  paragraph: 'Przedstawiam Wam kilka najciekawszych projektów',
}

const ArticlesPage = ({ data }) => {
  const { 
    allDatoCmsPortfolio: { nodes },
  } = data;

  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticesWrapper>
        {nodes.map(({title, featuredImage }) => (
          <ArticlePreview 
            key={title} 
            title={title} 
            image={featuredImage.fluid} 
            slug={slugify(title, { lower: true })}
          />
        ))}
      </ArticesWrapper>
    </>
  )
};

export const query = graphql`
  {
    allDatoCmsPortfolio {
      nodes {
        title
        featuredImage {
          fluid(maxWidth: 500,) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;