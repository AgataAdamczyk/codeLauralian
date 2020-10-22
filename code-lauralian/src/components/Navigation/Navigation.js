import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { colors, typography } from 'utils';
import Image from 'gatsby-image';

const NavigationWrapper = styled.nav`
    height: 10vh;
    width: 100vw;
    padding: 60px 30px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-bottom: 1px solid ${colors.appleGreen};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${colors.summerSky};
    /* font-family: 'Montserrat'; */

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Logo = styled(Link)`
    width: 12vw;
`;

const LogoImg = styled(Image)`
    margin-right: 10px;
`;

const NavigationList = styled.ul`
    list-style: none;
    display: flex;
`;

const NavigationListItem = styled.li`
    font-size: 15px;
    font-weight: ${typography.fontWeightLight};
    margin-left: 50px;

    &:hover {
        color: ${colors.appleGreen};
        text-decoration: underline;
    }
`;

const Navigation = () => {

    const data = useStaticQuery(graphql`
        {
            file(name: {eq: "logo_code2"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
            }
        }
    `);

    return (
        <NavigationWrapper>
            <Logo to='/' >
                <LogoImg fluid={data.file.childImageSharp.fluid}/>
            </Logo>
            <NavigationList>
                <NavigationListItem>
                    <Link to="/portfolio">portfolio</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/blog">blog</Link>
                </NavigationListItem>
                <NavigationListItem>
                    <Link to="/about">o mnie</Link>
                </NavigationListItem>
                {/* <NavigationListItem>
                    <Link to="/gallery">galeria</Link>
                </NavigationListItem> */}
                <NavigationListItem>
                    <Link to="/contact">kontakt</Link>
                </NavigationListItem>
            </NavigationList>
        </NavigationWrapper>
    )
};

export default Navigation;