import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from "@mdx-js/react"
import styled from 'styled-components';
import media from 'utils/media';
import Image from 'gatsby-image';
import PageInfo from 'components/PageInfo/PageInfo';
import AuthorInfo from 'components/AuthorInfo/AuthorInfo';
import PropTypes from 'prop-types';

const PostContent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  ${media.desktop`
    padding: 0 40px;
  `}
`;

const PostTitle = styled.h2`
  width: 90%;
  text-align: center;

  ${media.desktop`
    width: 50%;
  `}
`;

const PostParagraph = styled.p`
  width: 90%;
  line-height: 2.2;

  ${media.desktop`
    width: 50%;
  `}

  a {
    color: ${({theme}) => theme.colors.lemon};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
    margin-left: 20px;

    li::before {
      content: " ";
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-right: 15px;
      background-color: ${({theme}) => theme.colors.lemon};
    }
  }
`;

const PostImage = styled(Image)`
  margin: 30px 0;
  box-shadow: 9px 9px 20px -17px black;
`;

const PostLayout = ({ data }) => {
    return (
        <>
            <PageInfo
              title={data.datoCmsBlog.title}
              // paragraph={data.datoCmsArticle.data}
            />
           
            <PostContent> 
              <MDXProvider>
                {data.datoCmsBlog.blogContent.map(item => {
                    const itemKey = Object.keys(item)[1];

                    switch (itemKey) {
                        case 'paragraphContentNode': 
                            return <PostParagraph>
                                    <MDXRenderer key={item.id}>{item[itemKey].childMdx.body}</MDXRenderer>
                                  </PostParagraph>;
                        case 'heading': 
                            return <PostTitle key={item.id}>{item[itemKey]}</PostTitle>;
                        case 'imageData': 
                            return <PostImage key={item.id} fixed={item[itemKey].fixed} />;
                        default:
                            return null;
                    }
                })}
              </MDXProvider>
            </PostContent>
            <AuthorInfo 
              author={data.datoCmsBlog.autor}
              fixed={data.file.childImageSharp.fixed}
            />
        </>
    );
};

PostLayout.propTypes = {
  data: PropTypes.shape({
    datoCmsBlog: {
      title: PropTypes.string.isRequired,
      featuredImage: {
        fixed: PropTypes.string.isRequired,
      },
      blogContent: PropTypes.string.isRequired, 
      autor: PropTypes.string.isRequired,
    },
    file: {
      childImageSharp: {
        fixed: PropTypes.string.isRequired,
      }
    }
  }).isRequired,
};

export const query = graphql`
query querySingleBlog($id: String!) {
  datoCmsBlog(id: {eq: $id}) {
    title
    featuredImage {
      fixed(width: 900) {
        ...GatsbyDatoCmsFixed_tracedSVG
      }
    }
    blogContent {
      ... on DatoCmsParagraph {
        paragraphContentNode {
          childMdx {
            body
          }
        }
        id
      }
      ... on DatoCmsHeadingContent {
        heading
        id
      }
      ... on DatoCmsArticleImage {
        imageData {
          fixed(width: 700) {
            ...GatsbyDatoCmsFixed_tracedSVG
          }
        }
        id
      }
    }
    autor
  }
  file(name: {eq: "hero"}) {
    childImageSharp {
      fixed(height: 130, width: 130) {
          ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
}
`;

export default PostLayout;