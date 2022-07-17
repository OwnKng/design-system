import { MouseEventHandler } from "react"
import styled from "styled-components"
import React from "react"

interface ButtonProps {
  text?: string
  primary?: boolean
  disabled?: boolean
  size?: "small" | "medium" | "large"
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? "hotpink" : "none")};
`

const Button = ({
  text,
  primary = true,
  disabled,
  onClick,
  size,
  ...props
}: ButtonProps) => (
  <StyledButton
    type='button'
    primary={primary}
    disabled={disabled}
    size={size}
    onClick={onClick}
    {...props}
  >
    {text}
  </StyledButton>
)

export default Button
