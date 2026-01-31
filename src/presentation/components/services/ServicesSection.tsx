'use client';

import { Box, Text, Flex, Stack } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

const ServiceItem = ({ title, description }: { title: string; description: string }) => (
    <Flex className="flex items-center justify-between py-4 border-l-4 border-[#FF0000] pl-4 hover:bg-gray-50 transition-colors cursor-pointer">
        <Box>
            <Text className="font-semibold text-[16px] text-black">{title}</Text>
            <Text className="text-gray-500 text-[14px]">{description}</Text>
        </Box>
        <Box className="w-[44px] h-[44px] bg-[#FF0000] rounded-[10px] flex items-center justify-center shrink-0 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </Box>
    </Flex>
);

const InfoCard = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
    <Box className="w-full max-w-[387px] h-[408px] bg-transparent rounded-[20px] p-6 border border-[#EEEEEE] relative overflow-hidden">
        <Flex className="flex justify-between items-start mb-4">
            <Box>
                <Text className="font-medium text-[28px] text-[#434343] mb-2">{title}</Text>
                <Text className="font-normal text-[16px] text-[#434343] max-w-[200px]">{description}</Text>
            </Box>
            <Box className="w-[36px] h-[36px] bg-gray-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </Box>
        </Flex>
        {children}
    </Box>
);

export const ServicesSection = () => {
    return (
        <Box as="section" className="w-full bg-[#FDFDFD] py-16 px-4 md:px-8 lg:px-16 mt-16">
            <Box className="max-w-7xl mx-auto">
                <Flex className="flex flex-col lg:flex-row gap-[12px]">
                    {/* Left Column */}
                    <Box className="flex-1 flex flex-col gap-[12px]">
                        {/* Top Row - Two Cards */}
                        <Flex className="flex flex-col md:flex-row gap-[12px]">
                            {/* The Com Card */}
                            <InfoCard
                                title="The Com"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            >
                                <Box className="h-[250px] relative mt-4">
                                    <Image
                                        src="/Image/map.png"
                                        alt="World Map"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </Box>
                            </InfoCard>

                            {/* Mateluxy Pro Card */}
                            <InfoCard
                                title="Mateluxy Pro"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            >
                                <Box className="h-[180px] relative mt-4">
                                    {/* Placeholder for network illustration */}
                                    <Box className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                                        <Text className="text-gray-400 text-sm">Network Illustration</Text>
                                    </Box>
                                </Box>
                            </InfoCard>
                        </Flex>

                        {/* Our Premium Services */}
                        <Box className="w-full max-w-[792px] h-auto min-h-[373px] bg-[#FAFAFA] rounded-[20px] p-6 border-[0.5px] border-[#CECECE]">
                            {/* Header */}
                            <Flex className="flex items-center gap-3 mb-6">
                                <Box className="w-[40px] h-[40px] bg-red-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </Box>
                                <Box>
                                    <Text className="font-semibold text-[20px] text-black">Our Premium Services</Text>
                                    <Text className="text-gray-500 text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                </Box>
                            </Flex>

                            {/* Service Items */}
                            <Stack className="flex flex-col gap-4">
                                <ServiceItem
                                    title="Residential Sales and Leasing"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                />
                                <ServiceItem
                                    title="Commercial Sales and Leasing"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                />
                                <ServiceItem
                                    title="Property Management"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                />
                            </Stack>
                        </Box>
                    </Box>

                    {/* Right Column - Property Image */}
                    <Box className="w-full max-w-[389px] h-[787px] relative rounded-[20px] overflow-hidden shrink-0 hidden lg:block">
                        <Image
                            src="/Image/Frame 52.png"
                            alt="Premium Property"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
