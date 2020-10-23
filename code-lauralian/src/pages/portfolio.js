import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PageWrapper = styled.div`
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

const PortfolioPage = () => (
  <PageWrapper>
    <Title>Portfolio</Title>
    <Decor>. . .</Decor>
    <Paragraph>Chcesz zobaczyć moje projekty ?</Paragraph>
    <Link to="https://github.com/AgataAdamczyk" target="_blank">github</Link>
  </PageWrapper>
);

export default PortfolioPage;