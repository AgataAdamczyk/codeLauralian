import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({theme}) => theme.colors.white};
    border: 2px solid ${({theme}) => theme.colors.lemon};
    border-radius: 5px;
    padding: 12px 25px;
    color: ${({theme}) => theme.colors.black};
    font-size: 13px;
    font-weight: ${({theme}) => theme.colors.thin};
    text-decoration: none;
    transition: box-shadow .3s ease;
    cursor: pointer;

    :hover {
        box-shadow: 0 10px 20px -15px ${({theme}) => theme.colors.lemon};
    }
`;

export default Button;