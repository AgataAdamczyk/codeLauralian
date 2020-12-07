import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

const PreviewWrapper = styled(Link)`
    display: block;
    position: relative;
    margin-left: 40px;
    width: 100%;
    height: 250px;
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

const BlogPreview = ({ title, image, slug }) => (
    <PreviewWrapper to={`/blog/${slug}`}>
        <StyledImage fluid={image} />
        <PreviewInfoLabel>
            <h3>{title}</h3>
        </PreviewInfoLabel>
    </PreviewWrapper>
);

BlogPreview.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.objectOf.isRequired,
    slug: PropTypes.string.isRequired
};

export default BlogPreview;