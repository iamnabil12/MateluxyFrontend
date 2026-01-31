import { HeroSection } from "@/src/presentation/components/hero/HeroSection";
import { WhyChooseSection } from "@/src/presentation/components/property-management/WhyChooseSection";
import { PropertyManagementDetails } from "@/src/presentation/components/property-management/PropertyManagementDetails";
import { PropertyMapSection } from "@/src/presentation/components/property-management/PropertyMapSection";
import { PropertyContactSection } from "@/src/presentation/components/property-management/PropertyContactSection";
import { WhereNextSection } from "@/src/presentation/components/property-management/WhereNextSection";

export default function PropertyManagementPage() {
    return (
        <main>
            <HeroSection />
            <WhyChooseSection />
            <PropertyManagementDetails />
            <PropertyMapSection />
            <PropertyContactSection />
            <WhereNextSection />
        </main>
    );
}
