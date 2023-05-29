import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
   const router = useRouter();
   const { pathname } = router;

   // Check if the current page is the home page
   const isHomePage = pathname === "/";

   return (
     <div>
       {!isHomePage && <Navbar />}
       <Component {...pageProps} />
     </div>
   );
}
