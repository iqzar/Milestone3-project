import { CartProvider } from './context/CartContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;