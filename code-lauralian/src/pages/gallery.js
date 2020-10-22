// import React from 'react';
// import styled from 'styled-components';
// import { graphql } from 'gatsby';
// import Image from 'gatsby-image';
// import PropTypes from 'prop-types';

// const GalleryImages = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 60px;
// `;

// const SingleImage = styled(Image)`
//   justify-self: center;
// `;

// const GalleryPage = ({ data }) => {

//   return (
//     <>
//      <h1>My gallery </h1>
//      <GalleryImages>
//      {data.allFile.edges.map(({ node }, i)  => 
//        <SingleImage
//         key={i}
//         fixed={node.childImageSharp.fixed}
//         alt='photo'
//         /> 
//      )}
//      </GalleryImages>
//    </>
//   );
// };

// GalleryPage.propTypes = {
//   data: PropTypes.shape({
//     allFile: {
//       edges: {
//         node: {
//           childImageSharp: {
//             fixed: PropTypes.string.isRequired,
//           }
//         }
//       }
//     }
//   }).isRequired,
// };

// export const query = graphql`
//   {
//     allFile(filter: {absolutePath: {regex: "/gallery/"}}) {
//       edges {
//         node {
//           childImageSharp {
//             fixed(height: 500) {
//               ...GatsbyImageSharpFixed_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default GalleryPage;