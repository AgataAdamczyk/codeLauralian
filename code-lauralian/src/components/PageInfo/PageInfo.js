import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-weight: ${({theme}) => theme.font.bold};
  width: 50%;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 50%;
  text-align: justify;
  text-align-last: center;
  line-height: 1.8;
`;

const Decor = styled.span`
  font-size: 25px;
  color: ${({theme}) => theme.colors.lemon};
  margin: 10px;
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
