import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import PageInfo from 'components/PageInfo/PageInfo';
import PropTypes from 'prop-types';

const PortfolioLink = styled(Link)`
  width: 100vw;
  display: flex;
  text-decoration: none;
  justify-content: center;
  margin: 40px 0;
  cursor: pointer;
`;

const pageData = {
  title: 'Portfolio',
  paragraph: 'Chcesz zobaczyć moje projekty ?',
};

const PortfolioPage = ({ data }) => (
  <>
    <PageInfo 
      title={pageData.title} 
      paragraph={pageData.paragraph}
    />
    <PortfolioLink to="https://github.com/AgataAdamczyk" target="_blank">
      <Image fixed={data.file.childImageSharp.fixed} />
    </PortfolioLink>
  </>
);

PortfolioPage.propTypes = {
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
    file(name: {eq: "github_link"}) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

export default PortfolioPage;