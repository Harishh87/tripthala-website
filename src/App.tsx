import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rishikesh from "./pages/cities/Rishikesh";
import McLeodGanj from "./pages/cities/McLeodGanj";
import Jaisalmer from "./pages/cities/Jaisalmer";
import Alleppey from "./pages/cities/Alleppey";
import Tribe from "./pages/Tribe";
import Festivals from "./pages/Festivals";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { initGA, trackPageView } from "./lib/ga";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname);
  }, []);
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities/rishikesh" element={<Rishikesh />} />
          <Route path="/cities/mcleodganj" element={<McLeodGanj />} />
          <Route path="/cities/jaisalmer" element={<Jaisalmer />} />
          <Route path="/cities/alleppey" element={<Alleppey />} />
          <Route path="/tribe" element={<Tribe />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)};

export default App;
