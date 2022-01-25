import react, { ReactNode } from 'react';
import Header from '@components/Header';

interface GlobalLayoutProps {
  children: ReactNode;
}
function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <Header />
      <div className="relative z-1 pt-2 px-7 border-t ColorBorder h-screen">{children}</div>
      {/* <div className="pt-2 px-7 border-t ColorBorder h-screen">{children}</div> */}
    </>
  );
}
export default GlobalLayout;
