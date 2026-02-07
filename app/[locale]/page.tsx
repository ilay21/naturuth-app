import About from '@/components/About';
import Aromatherapy from '@/components/Aromatherapy';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SleepScience from '@/components/SleepScience';
import WhatsAppButton from '@/components/WhatsAppButton';
import Workshops from '@/components/Workshops';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SleepScience />
        <Aromatherapy />
        <Services />
        <Workshops />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
