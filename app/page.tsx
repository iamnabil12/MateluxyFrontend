
import { HeroSection } from "@/src/presentation/components/hero/HeroSection";
import { ServicesSection } from "@/src/presentation/components/services/ServicesSection";
import { PropertiesSection } from "@/src/presentation/components/properties/PropertiesSection";
import { LocationsSection } from "@/src/presentation/components/locations/LocationsSection";
import { GuidesSection } from "@/src/presentation/components/guides/GuidesSection";
import { FeatureSearchSection } from "@/src/presentation/components/features/FeatureSearchSection";
import { Footer } from "@/src/presentation/components/footer/Footer";

export default function Home() {
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
}
