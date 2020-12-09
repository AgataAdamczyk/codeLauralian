import React from 'react';
import { graphql } from 'gatsby';
import slugify from 'slugify';
import styled from 'styled-components';
import media from 'utils/media';
import PageInfo from 'components/PageInfo/PageInfo';
import BlogPreview from 'components/BlogPreview/BlogPreview';
import PropTypes from 'prop-types';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  align-items: center;

  ${media.desktop`
    display: grid;
    grid-template-columns: repeat(3, 370px);
    grid-gap: 60px;
    padding: 40px;
  `}
`;

const pageData = {
  title: 'Blog',
  paragraph: 'Porcja wiedzy i przemyśleń frontendowych 😉',
};

const BlogPage = ({ data }) => {
  const { 
    allDatoCmsBlog: { nodes },
  } = data;

  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <BlogWrapper>
        {nodes.map(({title, featuredImage }) => (
          <BlogPreview 
            key={title} 
            title={title} 
            image={featuredImage.fluid} 
            slug={slugify(title, { lower: true })}
          />
        ))}
      </BlogWrapper>
    </>
  )
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    allDatoCmsBlog: {
      nodes: {
        title: PropTypes.string.isRequired,
        featuredImage: {
          fluid: PropTypes.object.isRequired,
        }
      }
    }
  }).isRequired,
};

export const query = graphql`
  {
    allDatoCmsBlog {
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