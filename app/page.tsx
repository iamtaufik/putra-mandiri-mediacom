import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import ServiceSection from '@/components/service-section';
import TestimonialSection from '@/components/testimonial-section';
import WhyusSection from '@/components/whyus-section';

export default function Home() {
  return (
    <main className="h-full text-base overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <TestimonialSection />
      <WhyusSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
