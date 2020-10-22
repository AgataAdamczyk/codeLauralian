import styled from 'styled-components';
import { colors, typography } from 'utils';

const Button = styled.button`
    background-color: ${colors.lemon};
    border: none;
    border-radius: 5px;
    padding: 12px 25px;
    color: ${colors.summerSky};
    font-size: 13px;
    font-weight: ${typography.fontWeightLight};
    flex-shrink: 0;
`;

export default Button;