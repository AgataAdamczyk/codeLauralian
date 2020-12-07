import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import PropTypes from 'prop-types';

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5em;
`;

const Title = styled.h1`
  font-weight: ${({theme}) => theme.font.bold};
  width: 50%;
  text-align: center;
  font-size: 1.5em;

  ${media.desktop`
    font-size: 2em;
  `}
`;

const Paragraph = styled.p`
  width: 50%;
  text-align: justify;
  text-align-last: center;
  line-height: 1.8;
  font-size: 1em;

  ${media.desktop`
    font-size: 1.2em;
  `}
`;

const Decor = styled.span`
  font-size: 1.4em;
  color: ${({theme}) => theme.colors.appleGreen};
  margin: .3em;

  ${media.desktop`
    font-size: 1.8em;
    margin: .5em;
  `}
`;

const PageInfo = ({ title, paragraph }) => (
    <PageWrapper>
        <Title>{title}</Title>
        <Decor>. . .</Decor>
        <Paragraph>{paragraph}</Paragraph>
    </PageWrapper>
);

PageInfo.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
};

export default PageInfo;
