'use client';

import { Box } from '@frooxi-labs/adaptive-ui';
import { Header } from '../shared/components/Header';
import { Footer } from '../shared/components/Footer';
import { ContactHero } from './components/ContactHero';

export const ContactPage = () => {
    return (
        <Box className="min-h-screen bg-white text-black font-sans relative">
            <Header theme="light" />

            <main>
                <ContactHero />
                {/* Additional contact sections can be added here */}
            </main>

            <Footer />
        </Box>
    );
};
