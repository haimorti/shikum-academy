import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import AccessibilityPage from "./pages/AccessibilityPage"
import ApplicationPage from "./pages/ApplicationPage"
import BenefitsPage from "./pages/BenefitsPage"
import ContactPage from "./pages/ContactPage"
import EligibilityPage from "./pages/EligibilityPage"
import EquipmentPage from "./pages/EquipmentPage"
import FaqPage from "./pages/FaqPage"
import HomePage from "./pages/HomePage"
import HousingPage from "./pages/HousingPage"
import RehabAllowancePage from "./pages/RehabAllowancePage"
import TransportPage from "./pages/TransportPage"
import TuitionPage from "./pages/TuitionPage"
import TutoringPage from "./pages/TutoringPage"

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/housing" element={<HousingPage />} />
          <Route path="/rehab-allowance" element={<RehabAllowancePage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/tuition" element={<TuitionPage />} />
          <Route path="/tutoring" element={<TutoringPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
