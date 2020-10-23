import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const PageWrapper = styled(Link)`
  padding: 100px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const Logo404 = styled(Img)`
  background-color: white;
`;

const Info404 = styled.h2`
  color: ${({theme}) => theme.colors.black};

  :hover {
    color: ${({theme}) => theme.colors.appleGreen};
  }
`;

const NotFoundPage = ({ data }) => (
  <>
    <PageWrapper to='/'>
      <Logo404 fixed={data.file.childImageSharp.fixed}/>
      <Info404>Niestety, nie ma takiej strony...</Info404>
    </PageWrapper>
  </>
);

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {
        fixed: PropTypes.string.isRequired,
      }
    }
  }).isRequired,
};

export const query = graphql`
  {
    file(name: {eq: "logo_404_3"}) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default NotFoundPage;
