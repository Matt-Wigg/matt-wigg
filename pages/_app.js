import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import Layout from '../components/layout/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
      <Component {...pageProps} />
    // </Layout>
  )
};
