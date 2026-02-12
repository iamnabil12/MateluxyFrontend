'use client';

import { Box } from '@frooxi-labs/adaptive-ui';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { BuyHero } from './components/BuyHero';

export const BuyPage = () => {
    return (
        <Box className="min-h-screen bg-white text-black font-sans relative">
            <Header theme="light" />

            <main>
                <BuyHero />
                {/* Additional sections can be added here in the future */}
            </main>

            <Footer />
        </Box>
    );
};
