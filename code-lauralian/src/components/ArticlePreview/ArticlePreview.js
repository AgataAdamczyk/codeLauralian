import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const PreviewWrapper = styled(Link)`
    display: block;
    position: relative;
    width: 100%;
    height: 240px;
    background-color: hsl(0, 0%, 95%);
    background-image: url(${({backgroud}) => backgroud});
    background-size: cover;
`;

const PreviewInfoLabel = styled.div`
    position: absolute;
    left: 0;
    bottom: 35px;
    width: 70%;
    min-height: 40px;
    background-color: ${({theme}) => theme.colors.lemon};
    color: ${({theme}) => theme.colors.white};
    padding: 5px 15px;

    h2,
    p {
        margin: 5px;
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
            <h2>{title}</h2>
        </PreviewInfoLabel>
    </PreviewWrapper>
);

Preview.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};

export default Preview;