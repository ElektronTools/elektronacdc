import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'; // Si tienes estilos personalizados
import WhatsAppButton from '../components/WhatsAppButton';
import Layout from '../components/Layout';
import { ErrorBoundary } from 'react-error-boundary';
import 'bootstrap/dist/css/bootstrap.min.css';


function ErrorFallback({ error }) {
  return (
    <div className="container mt-5 text-center">
      <h2>Algo salió mal:</h2>
      <pre className="text-danger">{error.message}</pre>
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>
        <Component {...pageProps} />
        <WhatsAppButton />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
