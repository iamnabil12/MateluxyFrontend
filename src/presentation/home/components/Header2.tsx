'use client';

import { Box, Flex, Text, Stack } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

const Navbar = () => (
    <Box as="nav" className="w-full bg-white">
        <Flex className="flex justify-between items-center py-6 w-full px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
            {/* Logo Area */}
            <Box>
                <Image src="/Logo.svg" alt="Mateluxy Real Estate" width={180} height={50} />
            </Box>

            {/* Center Links - Desktop Only */}
            <Box className="hidden lg:block">
                <Flex className="flex h-[54px] bg-[#F7F7F7] rounded-[30px] px-[28px] gap-[34px] items-center justify-center">
                    {['Buy', 'Rent', 'Off Plan', 'Commercial', 'Contact', 'Team', 'News'].map((item) => (
                        <Text
                            key={item}
                            className={`font-semibold text-[15px] cursor-pointer transition-colors ${item === 'Contact' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
                        >
                            {item}
                        </Text>
                    ))}
                    {/* Active Indicator for Contact as per design image if needed, or just style simplified */}
                    {/* Using simple text colors based on the design which seems to have a light gray background for the pills or just text? 
                        Looking at the provided image in my memory, the header had a pill shape for the menu.
                        Let's replicate the pill shape from the original HeroSection but with light background.
                    */}
                </Flex>
            </Box>

            {/* Right Actions */}
            <Flex className="flex items-center gap-4">
                <Box as="button" className="w-[36px] h-[36px] flex items-center justify-center bg-[#F7F7F7] rounded-full text-black hover:bg-gray-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </Box>
                <Flex as="button" className="flex bg-[#25D366] text-white px-6 py-2.5 rounded-[30px] items-center gap-2 font-bold text-sm hover:bg-green-600 transition-all shadow-lg shadow-green-900/10">
                    WhatsApp
                </Flex>
            </Flex>
        </Flex>
    </Box>
);

export const Header2 = () => {
    return (
        <Box as="header" className="w-full bg-white pb-10">
            <Navbar />
            <Box className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 mt-10 md:mt-20 text-center">
                <Text
                    as="h1"
                    className="text-[30px] md:text-[40px] lg:text-[45px] font-medium text-[#8F8F8F] leading-tight"
                >
                    Uncover a Wide Selection & Match
                    <br />
                    <span className="text-black font-bold">with Your Dream House</span>
                </Text>
            </Box>
        </Box>
    );
};
