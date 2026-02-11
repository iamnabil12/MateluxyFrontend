'use client';

import { Box } from '@frooxi-labs/adaptive-ui';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { TeamHero } from './components/TeamHero';
import { TeamFilter } from './components/TeamFilter';
import { TeamGrid } from './components/TeamGrid';
import { AgentReels } from './components/AgentReels';
import { ManagementBenefits } from './components/ManagementBenefits';
import { useState } from 'react';

export const TeamPage = () => {
    const [activeTab, setActiveTab] = useState<'agents' | 'team'>('agents');
    const [searchQuery, setSearchQuery] = useState('');
    const [department, setDepartment] = useState('All');

    return (
        <Box className="min-h-screen bg-white text-black font-sans relative">
            <Header theme="light" />

            <main>
                <TeamHero />
                <TeamFilter
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    department={department}
                    setDepartment={setDepartment}
                />
                <TeamGrid
                    activeTab={activeTab}
                    searchQuery={searchQuery}
                    department={department}
                />
                <AgentReels />
                <ManagementBenefits />
            </main>

            <Footer />
        </Box>
    );
};
