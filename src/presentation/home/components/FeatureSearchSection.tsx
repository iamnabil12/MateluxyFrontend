'use client';

import { Box, Text, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';
import { useState } from 'react';

const AMENITIES = [
    { name: 'Swimming Pool', icon: '/swimmingpool.svg' },
    { name: 'Gym Accessories', icon: '/gym.svg' },
    { name: 'Parking', icon: '/parking.svg' },
    { name: 'Balcony', icon: '/balcony.svg' },
    { name: 'Tennis Court', icon: '/tenis.svg' },
    { name: 'Garden', icon: '/garden.svg' },
    { name: 'Elevator', icon: '/elevator.svg' },
    { name: 'Pet Friendly', icon: '/pet.svg' },
    { name: 'Smart Home', icon: '/smarthome.svg' },
    { name: 'Wifi Access', icon: '/wifi.svg' },
    { name: 'Laundry', icon: '/laundry.svg' },
    { name: 'Security', icon: '/security.svg' },
];

const TABS = ['Buy', 'Rent', 'Off Plan'];

export const FeatureSearchSection = () => {
    const [activeTab, setActiveTab] = useState('Buy');

    return (
        <Box as="section" className="w-full bg-white py-20 px-4 md:px-8 mb-[120px]">
            <Box className="max-w-7xl mx-auto">
                <Flex className="flex-col items-center mb-16 text-center">
                    <Text as="h2" className="text-[45px] font-semibold text-black font-montserrat mb-4">
                        Search properties by feature
                    </Text>
                    <Text className="text-[#9F9F9F] text-[16px] font-semibold font-montserrat mb-10">
                        Discover properties with your desired amenities to find your perfect home
                    </Text>

                    {/* Tabs */}
                    <Box className="bg-[#E1E1E1]/40 p-1.5 rounded-full inline-flex items-center">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    px-8 py-2.5 rounded-full text-[16px] font-normal transition-all duration-300 font-montserrat
                                    ${activeTab === tab
                                        ? 'bg-white text-black'
                                        : 'text-[#6D6D6D] hover:text-black'
                                    }
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </Box>
                </Flex>

                {/* Amenities Grid */}
                <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16">
                    {AMENITIES.map((item, index) => {
                        return (
                            <Flex key={index} className="flex-col items-center gap-4 group cursor-pointer">
                                <Box className="transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </Box>
                                <Text className="text-[18px] font-semibold text-[#4A4A4A] font-montserrat text-center group-hover:text-[#FF0000] transition-colors">
                                    {item.name}
                                </Text>
                            </Flex>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};
