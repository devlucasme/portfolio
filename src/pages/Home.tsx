import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <TechStack />
            <Projects />
            <Footer />
        </div>
    )
}