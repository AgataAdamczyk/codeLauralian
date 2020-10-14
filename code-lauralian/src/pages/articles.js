import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageInfo from "../components/PageInfo/PageInfo";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";

const ArticesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const pageData = {
  title: 'articles',
  paragraph: `While artist...`,
}

const ArticlesPage = ({ data }) => {
  const { allMdx: { nodes }} = data;

  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticesWrapper>
        {nodes.map(({excerpt, frontmatter: {title, slug, author, featuredImage }}) => (
          <ArticlePreview title={title} excerpt={excerpt} image={featuredImage.childImageSharp.fluid} />
        ))}
      </ArticesWrapper>
    </>
  )
};

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`

export default ArticlesPage;