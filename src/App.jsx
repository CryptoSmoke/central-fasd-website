import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import WhatIsFasd from './pages/WhatIsFasd'
import WhoWeAre from './pages/WhoWeAre'
import OurTeam from './pages/OurTeam'
import BoardOfDirectors from './pages/BoardOfDirectors'
import EducationPrevention from './pages/EducationPrevention'
import AssessmentDiagnosis from './pages/AssessmentDiagnosis'
import CommunityOutreach from './pages/CommunityOutreach'
import PcapProgram from './pages/PcapProgram'
import RestorativeJustice from './pages/RestorativeJustice'
import SupportGroups from './pages/SupportGroups'
import Careers from './pages/Careers'
import Volunteer from './pages/Volunteer'
import Donate from './pages/Donate'
import ContactUs from './pages/ContactUs'
import Events from './pages/Events'
import Blog from './pages/Blog'
import PolicyDocuments from './pages/PolicyDocuments'
import ReportingDocuments from './pages/ReportingDocuments'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <CookieBanner />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="what-is-fasd" element={<WhatIsFasd />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="board-of-directors" element={<BoardOfDirectors />} />
          <Route path="education-prevention" element={<EducationPrevention />} />
          <Route path="assement-diagnosis" element={<AssessmentDiagnosis />} />
          <Route path="community-outreach" element={<CommunityOutreach />} />
          <Route path="pcap-program" element={<PcapProgram />} />
          <Route path="restorative-justice-program" element={<RestorativeJustice />} />
          <Route path="cargiver-support-groups" element={<SupportGroups />} />
          <Route path="careers" element={<Careers />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="events" element={<Events />} />
          <Route path="blog" element={<Blog />} />
          <Route path="policy-documents" element={<PolicyDocuments />} />
          <Route path="reporting-documents" element={<ReportingDocuments />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
