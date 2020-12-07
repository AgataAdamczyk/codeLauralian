import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

const InfoWrapper = styled.div`
  width: 100vw;
  border: 1px solid #CDD2D4;
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  margin: 40px 0;
  background-color: #F9F9FB;
`;

const AuthorImg = styled(Image)`
  border-radius: 50%;
  grid-column: 1/2;
`;

const Author = styled.h4`
    font-weight: ${({theme}) => theme.font.bold};
    grid-column: 2/-1; 
    margin-bottom: 10px;  
`;

const Description = styled.p`
    grid-column: 2/-1;  
    font-size: 0.8em;
    font-weight: 400;
`;

const AuthorInfo = ({ fixed, author }) => (
    <InfoWrapper>
        <AuthorImg fixed={fixed} />
        <Author>
            {author}
            <Description>Front-end Developer</Description>
        </Author>
    </InfoWrapper>
);

AuthorInfo.propTypes = {
    fixed: PropTypes.objectOf.isRequired,
    author: PropTypes.string.isRequired,
};

export default AuthorInfo;