// app.jsx
import { Outlet } from 'react-router-dom';
import Header from './Pages/Layout/Header';


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;