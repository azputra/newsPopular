// import '../styles.css'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Navbar />
            <Component {...pageProps} />
        </Layout>
    )
}