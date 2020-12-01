import styled from 'styled-components';
import media from 'utils/media';

const Button = styled.button`
    background-color: ${({theme}) => theme.colors.white};
    border: 2px solid ${({theme}) => theme.colors.lemon};
    border-radius: .5em;
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.colors.thin};
    text-decoration: none;
    transition: box-shadow .3s ease;
    padding: .8em 1.2em;
    font-size: .6em;
    margin: 20px 0;
    cursor: pointer;

    :hover {
        box-shadow: 0 10px 20px -15px ${({theme}) => theme.colors.lemon};
    }

    ${media.tablet`
        font-size: .8em;
    `}
  
    ${media.desktop`
        font-size: 1em;
    `}
`;

export default Button;