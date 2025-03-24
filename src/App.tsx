
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ThemeProvider } from "./hooks/use-theme";
import PasswordProtection from "./components/PasswordProtection";

// Pages
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import Timeline from "./pages/Timeline";
import About from "./pages/About";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Component to handle page transitions
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Scroll to top on route change
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

// Skip to content link component
const SkipToContent = () => (
  <a 
    href="#main-content" 
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none"
  >
    Skip to content
  </a>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PasswordProtection>
            <SkipToContent />
            <Header />
            <PageTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
            <Footer />
          </PasswordProtection>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
