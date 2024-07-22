import '../app/globals.css';
import PrivateRoute from '../components/privateRoute';
// import Header from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <PrivateRoute>
      {/* <Header /> */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </PrivateRoute>
  );
}

export default MyApp;