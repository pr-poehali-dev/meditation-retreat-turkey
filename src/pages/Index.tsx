import HeroSection from "@/components/sections/HeroSection";
import LocationSection from "@/components/sections/LocationSection";
import PracticesSection from "@/components/sections/PracticesSection";
import BodhidharmaSection from "@/components/sections/BodhidharmaSection";
import ProgramSection from "@/components/sections/ProgramSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <LocationSection />
      <PracticesSection />
      <BodhidharmaSection />
      <ProgramSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
