import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const NavigationWrapper = styled.nav`
    width: 100%;
    padding: 30px;
    position: absolute;
    top: 0px;
    left: 0px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* font-family: 'Montserrat'; */

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Logo = styled(Link)`
    width: 25%;
    position: relative;
    font-weight: 700;
    font-size: 20px;
    /* margin-right: 10px; */
`;

const LogoImg = styled(Image)`
    position: absolute;
    top: 35px;
    left: 170px;
    width: 60px;
    height: 60px;
`;

const NavigationList = styled.ul`
    list-style: none;
    display: flex;
`;

const NavigationListItem = styled.li`
    font-size: 15px;
    font-weight: 600;
    margin-left: 32px;
`;

const Navigation = () => {

    const data = useStaticQuery(graphql`
        {
            file(name: {eq: "favicon"}) {
                childImageSharp {
                  fluid {
                    src
                  }
                }
            }
        }
    `);

    return (
        <NavigationWrapper>
            <Logo to='/'>
                <LogoImg fluid={data.file.childImageSharp.fluid}/>
                #CodeLauralian
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