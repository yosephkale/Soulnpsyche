import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Mission from "./sections/Mission";
import Services from "./sections/Services";
import Spaces from "./sections/Spaces";
import ServiceDetails from "./sections/ServiceDetails";
// import Testimonial from "./sections/Testimonial";
import Process from "./sections/Process";
import WhyChooseUs from "./sections/WhyChooseUs";
import FAQ from "./sections/FAQ";
import ContactForm from "./sections/ContactForm";
import Team from "./sections/Team";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Mission />
    <Services />
    <ServiceDetails />
    <WhyChooseUs />
    <Spaces />
    {/* <Testimonial /> */}
    <Process />
    <FAQ />
    <ContactForm />
  </>
);

const TeamPage = () => <Team />;

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
