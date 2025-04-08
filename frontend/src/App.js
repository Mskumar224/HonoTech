import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Explore from './pages/Explore';
import About from './pages/company/About';
import OurGoals from './pages/company/OurGoals';
import OurTeam from './pages/company/OurTeam';
import OurPhilosophy from './pages/company/OurPhilosophy';
import PrivacyPolicy from './pages/company/PrivacyPolicy';
import AppDevelopment from './pages/services/AppDevelopment';
import DataEngineeringAnalysis from './pages/services/DataEngineeringAnalysis';
import ITResources from './pages/services/ITResources';
import FullStackDevelopment from './pages/services/FullStackDevelopment';
import InfrastructureServices from './pages/services/InfrastructureServices';
import ApplicationManagement from './pages/services/ApplicationManagement';
import ITConsultingServices from './pages/services/ITConsultingServices';
import ITSecurity from './pages/services/ITSecurity';
import Testing from './pages/services/Testing';
import MobileApps from './pages/services/MobileApps';
import CloudComputing from './pages/services/CloudComputing';
import QualityAssurance from './pages/services/QualityAssurance';
import OffshoreSoftwareDevelopment from './pages/services/OffshoreSoftwareDevelopment';
import WebDevelopment from './pages/services/WebDevelopment';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/company/our-goals" element={<OurGoals />} />
        <Route path="/company/our-team" element={<OurTeam />} />
        <Route path="/company/our-philosophy" element={<OurPhilosophy />} />
        <Route path="/company/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/data-engineering-analysis" element={<DataEngineeringAnalysis />} />
        <Route path="/services/it-resources" element={<ITResources />} />
        <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/services/infrastructure-services" element={<InfrastructureServices />} />
        <Route path="/services/application-management" element={<ApplicationManagement />} />
        <Route path="/services/it-consulting-services" element={<ITConsultingServices />} />
        <Route path="/services/it-security" element={<ITSecurity />} />
        <Route path="/services/testing" element={<Testing />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/cloud-computing" element={<CloudComputing />} />
        <Route path="/services/quality-assurance" element={<QualityAssurance />} />
        <Route path="/services/offshore-software-development" element={<OffshoreSoftwareDevelopment />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;