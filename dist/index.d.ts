import * as styled_components from 'styled-components';

interface ButtonProps {
    size?: "small" | "medium" | "large";
}
declare const PrimaryButton: styled_components.StyledComponent<"button", styled_components.DefaultTheme, ButtonProps, never>;
declare const SecondaryButton: styled_components.StyledComponent<"button", styled_components.DefaultTheme, ButtonProps, never>;
declare const TertiaryButton: styled_components.StyledComponent<"button", styled_components.DefaultTheme, ButtonProps, never>;

declare const lightTheme: {
    colors: {
        background: string;
        paragraph: string;
        primary: string;
        secondary: string;
        tertiary: string;
    };
};
declare const darkTheme: {
    colors: {
        background: string;
        paragraph: string;
        primary: string;
        secondary: string;
        tertiary: string;
    };
};

declare const GlobalStyles: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

export { GlobalStyles, PrimaryButton, SecondaryButton, TertiaryButton, darkTheme, lightTheme };
