import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="page-transition"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}; 