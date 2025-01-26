import { Outlet } from 'react-router-dom';
import Header from './Pages/Layout/Header';
import Footer from './Pages/Layout/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;