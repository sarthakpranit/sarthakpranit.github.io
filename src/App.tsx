import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { ThemeProvider } from "./hooks/use-theme";
import PasswordProtection from "./components/PasswordProtection";
import { MainLayout } from "./layouts/MainLayout";
import { routes } from "./routes";
import { FEATURES } from "./config/features";

const queryClient = new QueryClient();

const App = () => {
  const content = (
    <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </MainLayout>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {FEATURES.PASSWORD_PROTECTION ? (
              <PasswordProtection>{content}</PasswordProtection>
            ) : (
              content
            )}
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
