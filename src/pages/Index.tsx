import Hero from "@/components/Hero";
import VideoDemo from "@/components/VideoDemo";
import BenefitsMarquee from "@/components/BenefitsMarquee";
import Features from "@/components/Features";
import Bonuses from "@/components/Bonuses";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactSupport from "@/components/ContactSupport";
import CTA from "@/components/CTA";
import SocialProofNotification from "@/components/SocialProofNotification";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <VideoDemo />
      <BenefitsMarquee />
      <Features />
      <Bonuses />
      <Pricing />
      <FAQ />
      <ContactSupport />
      <CTA />
      <SocialProofNotification />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
