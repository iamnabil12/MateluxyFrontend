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
                    <Flex className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        {(['Buy', 'Rent', 'Off Plan'] as const).map((tab) => (
                            <Box
                                key={tab}
                                as="button"
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 text-[14px] font-medium transition-colors ${activeTab === tab
                                    ? 'bg-gray-100 text-black'
                                    : 'bg-white text-gray-500 hover:bg-gray-50'
                                    }`}
                            >
                                {tab}
                            </Box>
                        ))}
                    </Flex>
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
