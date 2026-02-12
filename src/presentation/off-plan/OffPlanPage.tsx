'use client';

import { Box } from '@frooxi-labs/adaptive-ui';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { HeroSection } from '../home/components/HeroSection';
import { OffPlanIntro } from './components/OffPlanIntro';
import { OffPlanListing } from './components/OffPlanListing';
import { OffPlanSpecialists } from './components/OffPlanSpecialists';
import { TopRatedAgents } from './components/TopRatedAgents';
import { DeveloperShowcase } from './components/DeveloperShowcase';
import { ContactForm } from './components/ContactForm';

export const OffPlanPage = () => {
    return (
        <Box className="min-h-screen bg-white text-black font-sans relative">
            <main>
                <HeroSection />
                <OffPlanIntro />
                <OffPlanListing />
                <OffPlanSpecialists />
                <TopRatedAgents />
                <DeveloperShowcase />
                <ContactForm />
            </main>

            <Footer />
        </Box>
    );
};
