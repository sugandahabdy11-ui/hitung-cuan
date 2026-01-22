import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Pages
import Index from "./pages/Index";
import KalkulatorPph21 from "./pages/KalkulatorPph21";
import KalkulatorKpr from "./pages/KalkulatorKpr";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Theme initialization:
 * - localStorage
 * - system preference
 */
function ThemeInit() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("calctools-theme");
    const root = document.documentElement;

    root.classList.remove("dark");

    if (storedTheme === "dark") {
      root.classList.add("dark");
      return;
    }

    if (storedTheme === "light") return;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
    }
  }, []);

  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeInit />
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* MAIN PAGES */}
            <Route path="/" element={<Index />} />
            <Route
              path="/kalkulator-gaji-bersih-pph21"
              element={<KalkulatorPph21 />}
            />
            <Route
              path="/kalkulator-kpr"
              element={<KalkulatorKpr />}
            />

            {/* LEGAL PAGES */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
