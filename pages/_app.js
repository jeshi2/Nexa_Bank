import { AuthProvider } from '../context/AuthContext';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
        <Component {...pageProps} />    
    </AuthProvider>
  );
}
