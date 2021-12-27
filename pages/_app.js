import { CSSReset } from "@chakra-ui/core";
import { ThemeProvider } from "@chakra-ui/core";
import { AuthProvider } from "@/lib/auth";
import customTheme from "@/styles/theme";
import Head from "next/head";
import { Global, css } from "@emotion/core";
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            min-width: 360px;
            background-color: #edf2f7;
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
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
