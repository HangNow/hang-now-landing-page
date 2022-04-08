import '../styles/globals.css';
import mixpanel from 'mixpanel-browser';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

mixpanel.init('57d40f32fb36773d37e74e52fce0ebac', { debug: true });

export const theme = createTheme({
  primary: {
    main: '#ff8e3c',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HangNow</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
