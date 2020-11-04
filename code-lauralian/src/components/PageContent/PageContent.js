import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Header = styled.h3`
  width: 50%;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 50%;
  text-align: justify;
  text-align-last: center;
  line-height: 1.8;
`;

const PageImg = styled(Image)`
  display: flex;
  margin: 20px;
  align-items: center;
`;

const PageContent = ({ header, paragraph, fixed }) => (
    <PageWrapper>
        <Header>{header}</Header>
        <Paragraph>{paragraph}</Paragraph>
        <PageImg fixed={fixed}/>
    </PageWrapper>
);

PageContent.propTypes = {
    header: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    fixed: PropTypes.string.isRequired,
};

export default PageContent;