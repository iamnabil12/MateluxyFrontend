'use client';

import { Box } from '@frooxi-labs/adaptive-ui';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { TeamHero } from './components/TeamHero';
import { TeamFilter } from './components/TeamFilter';
import { TeamGrid } from './components/TeamGrid';
import { AgentReels } from './components/AgentReels';
import { ManagementBenefits } from './components/ManagementBenefits';

export const TeamPage = () => {
    return (
        <Box className="min-h-screen bg-white text-black font-sans relative">
            <Header theme="light" />

            <main>
                <TeamHero />
                <TeamFilter />
                <TeamGrid />
                <AgentReels />
                <ManagementBenefits />
            </main>

            <Footer />
        </Box>
    );
};
