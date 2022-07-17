import { MouseEventHandler } from "react"
import styled from "styled-components"
import React from "react"
import { elevation } from "../util"
import { darken } from "polished"

interface ButtonProps {
  size?: "small" | "medium" | "large"
}

const Button = styled.button<ButtonProps>`
  color: var(--colors-paragraph);
  ${elevation[1]}

  padding: 10px 32px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  min-width: 100px;

  transition: background 0.5s ease-in-out;
`

const PrimaryButton = styled(Button)`
  background: var(--colors-primary);

  :hover {
    background: ${(props) => darken(0.2, props.theme.colors.primary)};
  }
`

const SecondaryButton = styled(Button)`
  background: var(--colors-secondary);

  :hover {
    background: ${(props) => darken(0.2, props.theme.colors.secondary)};
  }
`

const TertiaryButton = styled(Button)`
  background: var(--colors-tertiary);

  :hover {
    background: ${(props) => darken(0.2, props.theme.colors.tertiary)};
  }
`

export { PrimaryButton, SecondaryButton, TertiaryButton }
