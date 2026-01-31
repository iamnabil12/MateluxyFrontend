'use client';

import { Box, Text, Stack, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => (
    <Box as="nav" className="absolute top-0 z-50 w-full">
        <Flex className="flex justify-between items-center py-6 w-full">
            {/* Logo Area */}
            <Box className="ml-4 md:ml-[58px]">
                <Image src="/Logo.svg" alt="Mateluxy Real Estate" width={180} height={50} />
            </Box>

            {/* Center Links - Desktop Only */}
            <Box className="hidden lg:block">
                <Flex className="flex w-[647px] h-[54px] bg-white/40 backdrop-blur-sm rounded-[30px] px-[28px] gap-[34px] items-center justify-center">
                    {['Buy', 'Rent', 'Off Plan', 'Commercial', 'Contact', 'Team', 'News'].map((item) => (
                        <Text
                            key={item}
                            className="text-white font-semibold text-[15px] cursor-pointer hover:text-white/80 transition-colors"
                        >
                            {item}
                        </Text>
                    ))}
                </Flex>
            </Box>

            {/* Right Actions */}
            <Flex className="flex items-center gap-4 mr-4 md:mr-[59px]">
                <Box as="button" className="w-[36px] h-[36px] flex items-center justify-center bg-[#D6D6D6]/20 rounded-full text-white hover:bg-white/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </Box>
                <Flex as="button" className="flex bg-green-500 text-white px-6 py-2.5 rounded-[30px] items-center gap-2 font-bold text-sm hover:bg-green-600 transition-all shadow-lg shadow-green-900/20">
                    WhatsApp
                </Flex>
            </Flex>
        </Flex>
    </Box>
);

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState('Rent');

    return (
        <Box
            className="bg-white rounded-[15px] py-4 px-5 shadow-[0px_0px_20px_-10px_rgba(0,0,0,0.25)] w-full lg:w-3/4 xl:w-3/5 max-w-4xl border border-[#E6E6E6] absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 z-20"
        >
            <Flex className="flex flex-col md:flex-row items-center gap-6">
                {/* Rent/Buy Toggle - Box with stroke only */}
                <Flex className="flex shrink-0 items-center gap-1 border border-[#F3F3F3] rounded-[10px] px-1 py-1">
                    <Box
                        as="button"
                        onClick={() => setActiveTab('Rent')}
                        className={`px-4 py-2 text-[16px] transition-all border-b-2 ${activeTab === 'Rent'
                            ? 'font-medium text-[#FF0000] border-[#FF0000]'
                            : 'font-normal text-[#666666] hover:text-gray-900 border-transparent'
                            }`}
                    >
                        Rent
                    </Box>
                    <Box
                        as="button"
                        onClick={() => setActiveTab('Buy')}
                        className={`px-4 py-2 text-[16px] transition-all border-b-2 ${activeTab === 'Buy'
                            ? 'font-medium text-[#FF0000] border-[#FF0000]'
                            : 'font-normal text-[#666666] hover:text-gray-900 border-transparent'
                            }`}
                    >
                        Buy
                    </Box>
                </Flex>


                {/* Locations */}
                <Box className="flex-1 cursor-pointer group px-4 ml-6">
                    <Text className="font-semibold text-[20px] text-black mb-0">Locations</Text>
                    <Flex className="flex items-center gap-3">
                        <Text className="text-gray-500 font-normal text-[16px] group-hover:text-red-600 transition-colors">Choose your city</Text>
                        <Image src="/locationround.svg" alt="Location" width={16} height={16} className="group-hover:scale-110 transition-transform" />
                    </Flex>
                </Box>

                {/* Vertical Divider */}
                <Box className="hidden md:block w-[2px] h-12 bg-[#999999]" />

                {/* Property type */}
                <Box className="flex-1 cursor-pointer group px-4">
                    <Text className="font-semibold text-[20px] text-black mb-0">Property type</Text>
                    <Flex className="flex items-center gap-2">
                        <Text className="text-gray-500 font-normal text-[16px] group-hover:text-red-600 transition-colors">Residential</Text>
                        <Image src="/downarrow.svg" alt="Drop down" width={12} height={12} className="group-hover:translate-y-0.5 transition-transform" />
                    </Flex>
                </Box>

                {/* Search Button */}
                <Flex
                    as="button"
                    className="flex bg-[#FF0000] text-white px-8 py-4 rounded-[10px] items-center gap-2 w-full md:w-auto justify-center hover:bg-red-700 transition-all font-medium shrink-0 active:scale-95 ml-1"
                >
                    Search
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </Flex>
            </Flex>
        </Box>
    );
};

export const HeroSection = () => {
    return (
        <Box
            as="section"
            className="w-full h-[92vh] relative bg-white p-4 flex items-center justify-center"
        >
            {/* Background Image Container - Rounded 30px */}
            <Box className="absolute inset-4 rounded-[30px] overflow-hidden z-0">
                <Image
                    src="/Image/BGimage.png"
                    alt="Luxury Home"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <Box className="absolute inset-0 bg-black/40" />
            </Box>

            {/* Content Container */}
            <Flex
                className="flex relative z-10 w-full h-full px-4 md:px-8 lg:px-16 flex-col justify-center items-start"
            >
                <Navbar />

                <Box className="max-w-6xl w-full pl-4 md:pl-[60px] lg:pl-[125px]">

                    {/* Hero Text Content */}
                    <Stack className="flex flex-col gap-6 max-w-3xl">
                        <Box>
                            <Text as="h1" className="text-[40px] md:text-[60px] lg:text-[90px] font-medium text-white leading-tight">
                                Altan: Waterfront <br />
                                Living Redefined
                            </Text>
                        </Box>

                        <Stack className="flex flex-col gap-4">
                            <Text className="text-white/90 text-[22px] font-medium">Flexible 80/20 Plan</Text>
                            <Text className="text-gray-200 text-[20px] font-normal max-w-xl">
                                We provide a complete service for the sale, purchase or rental of real estate.
                            </Text>
                        </Stack>

                        <Flex className="flex gap-4 mt-4 flex-col md:flex-row">
                            <Box
                                as="button"
                                className="border border-white text-white px-8 h-[63px] rounded-[20px] hover:bg-white hover:text-black transition-all flex items-center justify-center font-medium text-[18px]"
                            >
                                Learn More
                            </Box>
                            <Box
                                as="button"
                                className="bg-[#FF0000] text-white px-8 h-[63px] rounded-[20px] font-medium text-[18px] hover:bg-red-700 transition-all flex items-center justify-center"
                            >
                                Browse Properties
                            </Box>
                        </Flex>
                    </Stack>
                </Box>
            </Flex>

            {/* Floating Search Bar - Positioned relative to main section */}
            <SearchBar />
        </Box>
    );
};
