import styled from 'styled-components';
import {ButtonPropsType} from "./button";

export const StyledButton = styled.button<ButtonPropsType>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    transition: background-color 200ms ease;
    font-weight: bold;
    line-height: 36px;
    text-align: center;
    border: none;
    cursor: pointer;
    box-shadow: 10px 10px 5px 0 rgba(0,0,0,0.75);

    ${({variant}) => {
        switch (variant) {
            case 'orange':
                return 'background-color: #F5980F; color: #F9FC8D;' +
                        ' &:hover {background-color: #C46403; color: #FFFFFF;}'
            case 'green':
                return 'background-color: #238708; color: #F9FC8D;' +
                        ' &:hover {background-color: #185325; color: #FFFFFF;}'
            default:
                return 'background-color: #F5980F; color: #F9FC8D;' +
                        ' &:hover {background-color: green; color: #FFFFFF;}'
        }
    }}

    ${({size}) => {
        switch (size) {
            case 'sm':
                return 'padding: 10px 16px;';
            case 'md':
                return 'padding: 15px 26px;';
            default:
                return 'padding: 10px 16px;';
        }
    }}
`;