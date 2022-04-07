import '../styles/globals.css';
import mixpanel from 'mixpanel-browser';

mixpanel.init('57d40f32fb36773d37e74e52fce0ebac', { debug: true });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
