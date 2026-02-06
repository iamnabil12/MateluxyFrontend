import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { PropertiesSection } from "./components/PropertiesSection";
import { LocationsSection } from "./components/LocationsSection";
import { GuidesSection } from "./components/GuidesSection";
import { FeatureSearchSection } from "./components/FeatureSearchSection";
import { Footer } from "../shared/components/Footer";

export const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <ServicesSection />
            <PropertiesSection />
            <LocationsSection />
            <GuidesSection />
            <FeatureSearchSection />
            <Footer />
        </main>
    );
};
