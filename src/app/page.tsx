import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SampleWorks from "@/components/SampleWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <SampleWorks />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
