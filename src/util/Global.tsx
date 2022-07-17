import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const GlobalStyles = createGlobalStyle/*css*/ `
${normalize()}

:root {
    --colors-background: ${({ theme }) => theme.colors.background};
    --colors-paragraph: ${({ theme }) => theme.colors.paragraph};
    --colors-primary: ${({ theme }) => theme.colors.primary};
    --colors-secondary: ${({ theme }) => theme.colors.secondary}; 
    --colors-tertiary: ${({ theme }) => theme.colors.tertiary}; 
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 65px 0 0;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
