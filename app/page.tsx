import HeroSection from "./home/heroSection";
import TechStack from "./home/techStack";
import ClientsSection from "./home/clientsSection";
import AboutSection from "./home/aboutSection";
import CtaSection from "./home/ctaSection";
import ContactSection from "./home/contactSection";
import ServicesSection from "./home/servicesSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TechStack />
      <AboutSection />
      <ClientsSection />
      <CtaSection />
      <ContactSection />
    </main>
  );
}
