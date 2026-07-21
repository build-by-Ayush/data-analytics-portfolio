import { Outlet } from 'react-router-dom';
import BackgroundEffects from './BackgroundEffects';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden">
      <BackgroundEffects />
      <main className="relative z-[2] flex-1 w-full px-5 pt-3 pb-2 min-h-0 overflow-auto flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
