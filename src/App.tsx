
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import InteriorDetailing from "./pages/InteriorDetailing";
import ExteriorDetailing from "./pages/ExteriorDetailing";
import CompleteDetailing from "./pages/CompleteDetailing";
import BritishColumbia from "./pages/BritishColumbia";
import Alberta from "./pages/Alberta";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/interior-detailing" element={<InteriorDetailing />} />
            <Route path="/exterior-detailing" element={<ExteriorDetailing />} />
            <Route path="/complete-detailing" element={<CompleteDetailing />} />
            <Route path="/british-columbia" element={<BritishColumbia />} />
            <Route path="/alberta" element={<Alberta />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
