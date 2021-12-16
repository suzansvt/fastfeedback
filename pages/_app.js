import { CSSReset } from "@chakra-ui/core";
import { ThemeProvider } from "@chakra-ui/core";
import { AuthProvider } from "@/lib/auth";
import customTheme from "@/styles/theme";
import { Global, css } from "@emotion/core";
const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
