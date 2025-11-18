import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProviders } from "@/providers/app-providers";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TestContent = lazy(() => import("./pages/TestContent"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const App = () => (
  <AppProviders>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
            <Route path="/test-content" element={<TestContent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </AppProviders>
);

export default App;