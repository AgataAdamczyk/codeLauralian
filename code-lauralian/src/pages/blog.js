import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PageInfo from 'components/PageInfo/PageInfo';
import ArticlePreview from 'components/ArticlePreview/ArticlePreview';
import slugify from 'slugify';
import PropTypes from 'prop-types';

const ArticesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-gap: 60px;
  padding: 40px;
`;

const pageData = {
  title: 'Artykuły',
  paragraph: 'Artykuły o frontendzie',
};

const BlogPage = ({ data }) => {
  const { 
    allDatoCmsArticle: { nodes },
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

BlogPage.propTypes = {
  data: PropTypes.shape({
    allDatoCmsArticle: {
      nodes: {
        title: PropTypes.string.isRequired,
        featuredImage: {
          fluid: PropTypes.string.isRequired
        }
      }
    }
  }).isRequired,
};


export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default BlogPage;