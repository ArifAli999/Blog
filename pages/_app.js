import react from 'react';
import  Layout  from '../components/Layout';
import "tailwindcss/tailwind.css";
import "swiper/css/bundle";

import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps }) {
  return (
 
       <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
      </AnimatePresence>

    
  )
}

export default MyApp
