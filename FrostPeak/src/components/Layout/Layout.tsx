import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
//import { AnimatedBackground } from '../Background/AnimatedBackground'

export const Layout = () => {
    return (
      <>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
      </>
  );
};
