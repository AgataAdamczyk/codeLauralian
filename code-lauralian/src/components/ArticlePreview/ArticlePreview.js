import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const PreviewWrapper = styled(Link)`
    display: block;
    position: relative;
    margin-left: 40px;
    width: 100%;
    height: 240px;
    background-color: hsl(0, 0%, 95%);
    background-image: url(${({backgroud}) => backgroud});
    box-shadow: 9px 9px 20px -17px black;
    background-size: cover;
`;

const PreviewInfoLabel = styled.div`
    position: absolute;
    left: -10px;
    bottom: 35px;
    width: 70%;
    min-height: 40px;
    background-color: ${({theme}) => theme.colors.lemon};
    box-shadow: 9px 9px 20px -17px black;
    color: ${({theme}) => theme.colors.black};
    padding: 5px 15px;

    h3 {
        margin: 5px;
        font-weight: 600;
    }
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Preview = ({ title, image, slug }) => (
    <PreviewWrapper to={`/articles/${slug}`}>
        <StyledImage fluid={image} />
        <PreviewInfoLabel>
            <h3>{title}</h3>
        </PreviewInfoLabel>
    </PreviewWrapper>
);

Preview.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

export default Preview;