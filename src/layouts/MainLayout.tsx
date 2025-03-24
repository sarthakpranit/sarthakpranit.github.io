import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageTransition, SkipToContent } from '../components';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <SkipToContent />
      <Header />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </>
  );
}; 