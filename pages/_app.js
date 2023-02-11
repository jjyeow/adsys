import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
    return (
    <>
        <ToastContainer
            position="top-right"
            autoClose={5000}    
        />
        <Component {...pageProps} />
    </>
    )
}

export default MyApp
