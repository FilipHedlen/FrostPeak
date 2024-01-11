import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'; 
import { Footer } from '../Footer/Footer'; 
import { AnimatedBackground } from '../Background/AnimatedBackground'

export const Layout = () => {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <AnimatedBackground />
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
  );
};
