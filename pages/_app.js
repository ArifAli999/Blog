import react from 'react';
import  Layout  from '../components/Layout';
import 'bulma/css/bulma.min.css';
import '../styles/globals.css';
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
 
       <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
      </AnimatePresence>

    
  )
}

export default MyApp
