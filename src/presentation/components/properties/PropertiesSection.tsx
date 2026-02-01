'use client';

import { Box, Text, Flex, Stack } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';
import { useState } from 'react';

import { PropertyCard, PropertyCardProps } from './PropertyCard';

const sampleProperties: PropertyCardProps[] = [
    {
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        address: '3825 E Prawirotaman Ave, Jogja 85018',
        beds: 3,
        baths: 2,
        sqft: 2200,
        price: '18000 AED',
        type: 'Appartment',
        badge: 'Off Plan',
        developer: 'NAKHEEL',
        agent: { name: 'Tanvir Almas', languages: 'Speaks English, Bengali', avatar: '/Image/BGimage.png' }
    },
    {
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        address: '3825 E Prawirotaman Ave, Jogja 85018',
        beds: 3,
        baths: 2,
        sqft: 2200,
        price: '18000 AED',
        type: 'Appartment',
        badge: 'Off Plan',
        agent: { name: 'Tanvir Almas', languages: 'Speaks English, Bengali', avatar: '/Image/BGimage.png' }
    },
    {
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        address: '3825 E Prawirotaman Ave, Jogja 85018',
        beds: 3,
        baths: 2,
        sqft: 2200,
        price: '18000 AED',
        type: 'Appartment',
        badge: 'Off Plan',
        agent: { name: 'Tanvir Almas', languages: 'Speaks English, Bengali', avatar: '/Image/BGimage.png' }
    },
    {
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        address: '3825 E Prawirotaman Ave, Jogja 85018',
        beds: 3,
        baths: 2,
        sqft: 2200,
        price: '18000 AED',
        type: 'Appartment',
        badge: 'Off Plan',
        agent: { name: 'Tanvir Almas', languages: 'Speaks English, Bengali', avatar: '/Image/BGimage.png' }
    },
    {
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        address: '3825 E Prawirotaman Ave, Jogja 85018',
        beds: 3,
        baths: 2,
        sqft: 2200,
        price: '18000 AED',
        type: 'Appartment',
        badge: 'Off Plan',
        agent: { name: 'Tanvir Almas', languages: 'Speaks English, Bengali', avatar: '/Image/BGimage.png' }
    },
    {
        image: '/Image/property.png',
        title: 'Prawira Valley Prawira...',
        address: '3825 E Prawirotaman Ave, Jogja 85018',
        beds: 3,
        baths: 2,
        sqft: 2200,
        price: '18000 AED',
        type: 'Appartment',
        badge: 'Off Plan',
        agent: { name: 'Tanvir Almas', languages: 'Speaks English, Bengali', avatar: '/Image/BGimage.png' }
    },
];

export const PropertiesSection = () => {
    const [activeTab, setActiveTab] = useState<'Buy' | 'Rent' | 'Off Plan'>('Buy');

    return (
        <Box as="section" className="w-full bg-[#FFFFFF] py-16 px-4 md:px-8 lg:px-16">
            <Box className="w-full max-w-[1300px] mx-auto">
                {/* Header */}
                <Flex className="flex justify-between items-center mb-10">
                    <Text className="text-[45px] font-medium text-black">Premium Properties</Text>

                    {/* Tabs */}
                    {/* Tabs */}
                    <Box className="bg-[#EDEDED] p-1.5 rounded-full inline-flex items-center">
                        {(['Buy', 'Rent', 'Off Plan'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    px-8 py-2.5 rounded-full text-[16px] font-semibold transition-all duration-300 font-montserrat
                                    ${activeTab === tab
                                        ? 'bg-white text-black shadow-sm'
                                        : 'text-[#6D6D6D] hover:text-black'
                                    }
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </Box>
                </Flex>

                {/* Property Grid */}
                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                    {sampleProperties.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
