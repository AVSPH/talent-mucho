import Hero from "../components/Hero";
import ClientsSection from "../components/ClientsSection";
import ChallengeSection from "../components/ChallengeSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WebsiteServiceSection from "../components/WebsiteServiceSection";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import ProcessSection from "../components/ProcessSection";
import PhilosophySection from "../components/PhilosophySection";
import WhyUsSection from "../components/WhyUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ClientsSection />
        <WhoWeAreSection />
        <WebsiteServiceSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <WhyUsSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
    </>
  );
}
