import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Media from 'components/Media/Media';

const NavigationWrapper = styled.nav`
    height: 10vh;
    width: 100vw;
    padding: 60px 30px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-bottom: 1px solid ${({theme}) => theme.colors.appleGreen};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({theme}) => theme.colors.black};
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
    font-weight: ${({theme}) => theme.thin};
    margin-left: 50px;

    :hover {
        color: ${({theme}) => theme.colors.appleGreen};
        text-decoration: underline;
    }
`;

const Navigation = () => {

    const data = useStaticQuery(graphql`
        {
            file(name: {eq: "logo_new"}) {
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
            <Media/>
        </NavigationWrapper>
    )
};

export default Navigation;