import React from 'react';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageInfo from 'components/PageInfo/PageInfo';
import AuthorInfo from 'components/AuthorInfo/AuthorInfo';

const PostContent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
`;

const PostTitle = styled.h2`
  width: 50%;
  text-align: center;
`;

const PostParagraph = styled.p`
  width: 50%;
  line-height: 2.2;
`;

const PostImage = styled(Image)`
  margin: 30px 0;
  box-shadow: 9px 9px 20px -17px black;
`;

const PostLayout = ({ data }) => {
    return (
        <>
            <PageInfo
              title={data.datoCmsArticle.title}
              // paragraph={data.datoCmsArticle.data}
            />
            <PostContent>
                {data.datoCmsArticle.articleContent.map(item => {
                    const itemKey = Object.keys(item)[1];

                    switch (itemKey) {
                        case 'paragraphContent': 
                            return <PostParagraph key={item.id}>{item[itemKey]}</PostParagraph>;
                        case 'heading': 
                            return <PostTitle key={item.id}>{item[itemKey]}</PostTitle>;
                        case 'imageData': 
                            return <PostImage key={item.id} fixed={item[itemKey].fixed} />;
                        default:
                            return null;
                    }
                })}
            </PostContent>
            <AuthorInfo 
              author={data.datoCmsArticle.autor}
              fixed={data.file.childImageSharp.fixed}
            />
        </>
    );
};

PostLayout.propTypes = {
  data: PropTypes.shape({
    datoCmsArticle: {
      title: PropTypes.string.isRequired,
      featuredImage: {
        fixed: PropTypes.string.isRequired,
      }
    }
  }).isRequired,
};

export const query = graphql`
query querySingleArticle($id: String!) {
    datoCmsArticle(id: {eq: $id}) {
      title
      featuredImage {
        fixed(width: 900) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      autor
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeadingContent {
          heading
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fixed(width: 800) {
                ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
          id
        }
      }
    }
    file(name: {eq: "me_img"}) {
      childImageSharp {
        fixed(height: 130, width: 130) {
            ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default PostLayout;