import React from 'react';
import {StyledButton} from './button.styles';

export type ButtonPropsType = {
    href?: string;
    variant?:
        | 'orange'
        | 'green'
    size?: 'sm' | 'md';
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement>
    ) => void | React.MouseEventHandler<HTMLButtonElement>;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<ButtonPropsType> = ({
                                                   variant = 'orange',
                                                   size = 'sm',
                                                   onClick,
                                                   href,
                                                   children,
                                     }) => (

        <StyledButton variant={variant} size={size} as={onClick ? 'button' : 'a'} href={href}>
            {children}
        </StyledButton>
);

export default Button;