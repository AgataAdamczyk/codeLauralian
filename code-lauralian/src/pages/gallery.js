import React from "react";
import { graphql } from "gatsby";

const GalleryPage = ({ data }) => (
  <>
    <h1>My gallery</h1>
    {/* {NodeList.map(({childImageSharp}) => (
      <img fluid={childImageSharp.fluid} />
    ))} */}
  </>
);

export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "/gallery/"}}) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default GalleryPage;