import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
//import { AnimatedBackground } from '../Background/AnimatedBackground'

const Layout = () => {
    return (
      <>
        <Header />
        <main className="relative">
         <Outlet />
        </main>
        <Footer />
      </>
  );
};

export default Layout;
