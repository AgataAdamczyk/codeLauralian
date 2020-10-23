import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

const Title = styled.h1`
  width: 50%;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 50%;
  text-align: center;
  line-height: 1.8;
`;

const Decor = styled.span`
  font-size: 30px;
  color: ${({theme}) => theme.colors.lemon};
  margin: 10px;
`;

const PageInfo = ({ title, paragraph }) => (
    <Wrapper>
        <Title>{title}</Title>
        <Decor>. . .</Decor>
        <Paragraph>{paragraph}</Paragraph>
    </Wrapper>
);

PageInfo.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
};

export default PageInfo;
