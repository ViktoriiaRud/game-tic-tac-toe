import styled from 'styled-components';
import {ButtonPropsType} from "./button";

export const StyledButton = styled.a<ButtonPropsType>`
    width: 100%;
    max-width: 280px;
    letter-spacing: 0.2em;
    padding: 20px 20px;
    border: 1px solid #999;
    align-items: center;
    font-size: 24px;
    text-align: center;
    transition-property: background-color;
    transition-duration: 200ms;
    transition-timing-function: ease;
    cursor: pointer;
    
    ${({ variant }) => {
        switch (variant) {
            case 'orange':
                return (
                        'background-color: orange; color: red; '
                );
            case 'green':
                return (
                        'background-color: green; color: red; ' 
                );
                
            default:
                return 'orange';
        }
    }}

    ${({ size }) => {
        switch (size) {
            case 'sm':
                return 'padding: 8px 15px;';
            case 'md':
                return 'padding: 8px 26px;';
            default:
                return 'sm';
        }
    }}
    
`;
