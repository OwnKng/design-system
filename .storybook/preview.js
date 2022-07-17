import { addDecorator } from "@storybook/react"
import { withContexts } from "@storybook/addon-contexts/react"
import { contexts } from "./contexts"
import { GlobalStyles } from "../src/util"
import { withA11y } from "@storybook/addon-a11y"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))
addDecorator(withContexts(contexts))
addDecorator(withA11y)
