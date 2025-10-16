import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  // State management for contact modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  // Function to open modal with optional service pre-selection
  const openModal = (service?: string) => {
    setSelectedService(service || '');
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Sticky Header with Navigation */}
      <Header onOpenModal={() => openModal()} />

      {/* Main Content */}
      <main>
        {/* Hero Section with Circuit Pattern Background */}
        <Hero onOpenModal={(service) => openModal(service)} />

        {/* Problem Section - The AI Gap We're Closing */}
        <ProblemSection />

        {/* Solution Section - The Hive-Mind Architecture */}
        <SolutionSection />

        {/* Pricing Section - Your Journey to AI Transformation */}
        <PricingSection onOpenModal={(service) => openModal(service)} />

        {/* Blog Section - From the Anvil */}
        <BlogSection />
      </main>

      {/* Footer with Contact Information */}
      <Footer onOpenModal={() => openModal()} />

      {/* Contact Modal Overlay */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </>
  );
}

export default App;
