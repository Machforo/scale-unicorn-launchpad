import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Workshops from "./pages/Workshops";
import Services from "./pages/Services";
import Domains from "./pages/Domains";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import IntegrationDemo from "./pages/IntegrationDemo";
import NotFound from "./pages/NotFound";
import Coaching from "./pages/services/Coaching";
import Incubation from "./pages/services/Incubation";
import Funding from "./pages/services/Funding";
import ManagementConsulting from "./pages/services/ManagementConsulting";
import IncubatorManager from "./pages/services/IncubatorManager";
import BusinessStrategy from "./pages/services/BusinessStrategy";
import DigitalEngineering from "./pages/services/DigitalEngineering";
import CFAService from "./pages/services/CFAService";
import Patent from "./pages/services/Patent";
import ConceptualizeUnicorn from "./pages/workshops/ConceptualizeUnicorn";
import FundingMastery from "./pages/workshops/FundingMastery";
import DigitalTransformation from "./pages/workshops/DigitalTransformation";
import LeadershipExcellence from "./pages/workshops/LeadershipExcellence";
import FranchisingMastery from "./pages/workshops/FranchisingMastery";
import FinTechInnovation from "./pages/workshops/FinTechInnovation";
import BusinessVisioning from "./pages/workshops/BusinessVisioning";
import CrossingTheChasm from "./pages/workshops/CrossingTheChasm";
import FnB from "./pages/sectors/FnB";
import Pharmaceuticals from "./pages/sectors/Pharmaceuticals";
import SaaS from "./pages/sectors/SaaS";
import ITServices from "./pages/sectors/ITServices";
import RenewableEnergy from "./pages/sectors/RenewableEnergy";
import SectorEducation from "./pages/sectors/Education";
import SmartGrowth from "./pages/workshops/SmartGrowth";
import RealEstateStrategy from "./pages/workshops/RealEstateStrategy";
import PitchDeckEvaluation from "./pages/services/PitchDeckEvaluation";
import ForInvestors from "./pages/ForInvestors";
import ForStartups from "./pages/ForStartups";
import Education from "./pages/domains/Education";
import RealEstate from "./pages/domains/RealEstate";
import BFSIFintech from "./pages/domains/BFSIFintech";
import Telecom from "./pages/domains/Telecom";
import Retail from "./pages/domains/Retail";
import NewsMedia from "./pages/NewsMedia";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import PartnerUs from "./pages/PartnerUs";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import About from "./pages/About";
import GrowthStrategies from "./pages/GrowthStrategies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services/funding" element={<Funding />} />
          <Route path="/services/management-consulting" element={<ManagementConsulting />} />
          <Route path="/services/incubator-manager" element={<IncubatorManager />} />
          <Route path="/services/business-strategy" element={<BusinessStrategy />} />
          <Route path="/services/digital-engineering" element={<DigitalEngineering />} />
          <Route path="/services/cfa-service" element={<CFAService />} />
          <Route path="/services/patent" element={<Patent />} />
          <Route path="/workshops/conceptualize-unicorn" element={<ConceptualizeUnicorn />} />
          <Route path="/workshops/funding-mastery" element={<FundingMastery />} />
          <Route path="/workshops/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/workshops/leadership-excellence" element={<LeadershipExcellence />} />
          <Route path="/workshops/franchising-mastery" element={<FranchisingMastery />} />
          <Route path="/workshops/fintech-innovation" element={<FinTechInnovation />} />
          <Route path="/workshops/business-visioning" element={<BusinessVisioning />} />
          <Route path="/workshops/crossing-chasm" element={<CrossingTheChasm />} />
          <Route path="/sectors/fnb" element={<FnB />} />
          <Route path="/sectors/pharmaceuticals" element={<Pharmaceuticals />} />
          <Route path="/sectors/education" element={<SectorEducation />} />
          <Route path="/sectors/saas" element={<SaaS />} />
          <Route path="/sectors/it-services" element={<ITServices />} />
          <Route path="/sectors/renewable-energy" element={<RenewableEnergy />} />
          <Route path="/workshops/smart-growth" element={<SmartGrowth />} />
          <Route path="/workshops/real-estate-strategy" element={<RealEstateStrategy />} />
          <Route path="/services/pitch-deck-evaluation" element={<PitchDeckEvaluation />} />
        <Route path="/for-investors" element={<ForInvestors />} />
        <Route path="/for-startups" element={<ForStartups />} />
        <Route path="/domains" element={<Domains />} />
          <Route path="/domains/education" element={<Education />} />
          <Route path="/domains/real-estate" element={<RealEstate />} />
          <Route path="/domains/bfsi-fintech" element={<BFSIFintech />} />
          <Route path="/domains/telecom" element={<Telecom />} />
          <Route path="/domains/retail" element={<Retail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partner-us" element={<PartnerUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/growth-strategies" element={<GrowthStrategies />} />
          <Route path="/integration-demo" element={<IntegrationDemo />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
