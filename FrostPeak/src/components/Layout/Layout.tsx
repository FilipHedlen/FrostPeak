import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
import AnimatedBackground from '../Background/AnimatedBackground';

const Layout = () => {
    return (
      <>
        <AnimatedBackground />
        <Header />
        <main className="relative mb-20 mt-10">
         <Outlet />
        </main>
        <Footer />
      </>
  );
};

export default Layout;
