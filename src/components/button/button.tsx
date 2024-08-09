import React from "react";
import {StyledButton} from "./button.styles";

export type ButtonPropsType = {
    href?: string;
    variant?: 'orange' | 'green';
    size?: 'sm' | 'md';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonPropsType> = ({
                                               variant = 'orange',
                                               size = 'sm',
                                               onClick,
                                               children,
                                               ...props
                                           }) => (
    <StyledButton variant={variant} size={size} onClick={onClick} {...props}>
        {children}
    </StyledButton>
);

export default Button;