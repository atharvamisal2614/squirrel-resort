import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    handleStart();
    const timer = setTimeout(() => handleStop(), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
