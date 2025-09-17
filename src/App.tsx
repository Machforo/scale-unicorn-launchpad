import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Workshops from "./pages/Workshops";
import Services from "./pages/Services";
import Domains from "./pages/Domains";
import Resources from "./pages/Resources";
import IntegrationDemo from "./pages/IntegrationDemo";
import NotFound from "./pages/NotFound";
import Coaching from "./pages/services/Coaching";
import Incubation from "./pages/services/Incubation";
import Education from "./pages/domains/Education";
import RealEstate from "./pages/domains/RealEstate";
import BFSIFintech from "./pages/domains/BFSIFintech";
import Telecom from "./pages/domains/Telecom";
import Retail from "./pages/domains/Retail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/coaching" element={<Coaching />} />
          <Route path="/services/incubation" element={<Incubation />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/domains/education" element={<Education />} />
          <Route path="/domains/real-estate" element={<RealEstate />} />
          <Route path="/domains/bfsi-fintech" element={<BFSIFintech />} />
          <Route path="/domains/telecom" element={<Telecom />} />
          <Route path="/domains/retail" element={<Retail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/integration-demo" element={<IntegrationDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
