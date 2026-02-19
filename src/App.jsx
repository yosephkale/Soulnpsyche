import MainLayout from "./layout/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Mission from "./sections/Mission";
import Services from "./sections/Services";
import Spaces from "./sections/Spaces";
import ServiceDetails from "./sections/ServiceDetails";
import Process from "./sections/Process";
import WhyChooseUs from "./sections/WhyChooseUs";
import FAQ from "./sections/FAQ";
import ContactForm from "./sections/ContactForm";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Mission />
      <Services />
      <ServiceDetails />
      <WhyChooseUs />
      <Spaces />
      <Process />
      <FAQ />
      <ContactForm />
    </MainLayout>
  );
}

export default App;
