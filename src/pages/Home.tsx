import { ContactEmail } from "@/components/ContactEmail";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <ContactEmail />
      <Footer />
    </div>
  );
};
