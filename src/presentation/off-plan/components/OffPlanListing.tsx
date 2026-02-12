'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import { useState } from 'react';
import { OffPlanCard } from './OffPlanCard';
import Image from 'next/image';

const TABS = ['Latest', 'All', 'Appartment', 'Penthouse', 'Townhouse', 'Plot', 'Commercial'];

const MOCK_PROPERTIES = [
    {
        id: 1,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' }, // Placeholder logo path
        badges: ['New Launch', 'Appartment']
    },
    {
        id: 2,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' },
        badges: ['New Launch', 'Appartment']
    },
    {
        id: 3,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' },
        badges: ['New Launch', 'Appartment']
    },
    {
        id: 4,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' },
        badges: ['New Launch', 'Appartment']
    },
    {
        id: 5,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' },
        badges: ['New Launch', 'Appartment']
    },
    {
        id: 6,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' },
        badges: ['New Launch', 'Appartment']
    },
    {
        id: 7,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' },
        badges: ['New Launch', 'Appartment']
    },
    {
        id: 8,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' },
        badges: ['New Launch', 'Appartment']
    },
    {
        id: 9,
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        location: '3825 E Prawirotaman Ave, Jogja 85018',
        price: 'AED 2.16M',
        area: 811,
        completion: 'Q4 2027',
        developer: { name: 'NAKHEEL', logo: '/Assets/nakheel.png' },
        badges: ['New Launch', 'Appartment']
    }
];

export const OffPlanListing = () => {
    const [activeTab, setActiveTab] = useState('Latest');
    const [currentPage, setCurrentPage] = useState(2); // Set to 2 to match screenshot style roughly

    return (
        <Box className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
            {/* Header / Filter Tabs */}
            <Flex className="flex-col md:flex-row items-center justify-between gap-4 mb-8">
                {/* Tabs */}
                <Flex className="bg-[#F5F5F5] p-1.5 rounded-full overflow-x-auto w-full md:w-auto scrollbar-hide gap-1">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                ? 'bg-[#FC4F4F] text-white shadow-md' // Using bright red/coral color from screenshot
                                : 'text-[#1A1A1A] hover:bg-gray-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </Flex>

                {/* View On Map Button */}
                <button className="flex items-center gap-2 px-6 py-4 bg-[#F5F5F5] rounded-full hover:bg-gray-200 transition-colors shrink-0">
                    <Image src="/locationround.svg" alt="Map" width={20} height={20} />
                    <Text className="text-[14px] font-medium text-[#555555]">View On Map</Text>
                </button>
            </Flex>

            {/* Grid */}
            <Flex className="flex-wrap justify-center gap-[34px] mb-12">
                {MOCK_PROPERTIES.map((property) => (
                    <OffPlanCard key={property.id} {...property} />
                ))}
            </Flex>

            {/* Pagination */}
            <Flex className="justify-center items-center gap-3">
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                {[1, 2, 3].map(page => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-medium transition-all ${currentPage === page
                            ? 'bg-[#FF1111] text-white shadow-lg scale-110'
                            : 'bg-[#F5F5F5] text-[#555555] hover:bg-gray-200'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </Flex>
        </Box>
    );
};
