import { MouseEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: ({ text, primary, disabled, onClick, size, ...props }: ButtonProps) => JSX.Element;

export { Button };
