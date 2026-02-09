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

const InfoCard = ({ title, description, children, showArrow = true }: { title: string; description: string; children: React.ReactNode; showArrow?: boolean }) => (
    <Box className="w-full aspect-[387/408] bg-transparent rounded-[30px] p-6 border border-[#EEEEEE] relative overflow-hidden">
        <Flex className="flex justify-between items-start mb-4">
            <Box>
                <Text className="font-medium text-[28px] text-[#434343] mb-2">{title}</Text>
                <Text className="font-normal text-[16px] text-[#434343] max-w-[200px]">{description}</Text>
            </Box>
            {showArrow && (
                <Box className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#E9E9E9' }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 12.5L12.5 0.5M12.5 0.5V12.5M12.5 0.5H0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            )}
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
                                <Box className="absolute bottom-0 left-0 right-0 h-[225px]">
                                    <Image
                                        src="/Image/map.png"
                                        alt="World Map"
                                        fill
                                        style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                                    />
                                </Box>
                            </InfoCard>

                            {/* Mateluxy Pro Card */}
                            <InfoCard
                                title="Mateluxy Pro"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                showArrow={false}
                            >
                                <Box className="absolute bottom-[12px] left-0 right-0 h-[250px]">
                                    <Image
                                        src="/Image/mateluxy_pro_card.png"
                                        alt="Mateluxy Pro"
                                        fill
                                        style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                                    />
                                </Box>
                            </InfoCard>
                        </Flex>

                        {/* Our Premium Services */}
                        <Box className="w-full h-auto min-h-[373px] bg-gradient-to-b from-[#fcfcfc] to-[#FFFBF7] rounded-[30px] p-5 border border-[#F5F5F5]">
                            {/* Header */}
                            <Flex className="flex items-center gap-4 mb-8">
                                <Box className="w-[56px] h-[56px] bg-white rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)]">
                                    <Image src="/Image/premium.svg" alt="Premium" width={32} height={32} />
                                </Box>
                                <Box>
                                    <Text className="font-medium text-[24px] text-[#0F172A] leading-tight">Our Premium Services</Text>
                                    <Text className="text-[#AEAEAE] text-[14px] font-normal mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                </Box>
                            </Flex>

                            {/* Service Items */}
                            <Stack className="flex flex-col gap-3">
                                {[
                                    'Residential Sales and Leasing',
                                    'Commercial Sales and Leasing',
                                    'Property Management'
                                ].map((item, index) => (
                                    <Flex key={index} className="group flex items-center justify-between p-4 bg-white rounded-tr-[10px] rounded-br-[10px] border-l-2 border-l-[#FF0000] transition-all cursor-pointer">
                                        <Flex className="items-center gap-4">

                                            <Box>
                                                <Text className="font-bold text-[18px] text-[#0F172A] mb-1">{item}</Text>
                                                <Text className="text-[#94A3B8] text-[14px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                            </Box>
                                        </Flex>

                                        {/* Arrow Button */}
                                        <Box className="w-[48px] h-[48px] bg-[#FFF1F1] rounded-[12px] flex items-center justify-center shrink-0 group-hover:bg-[#FF0000] transition-colors ml-4">
                                            <svg
                                                className="text-[#FF0000] group-hover:text-white transition-colors"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            >
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                        </Box>
                                    </Flex>
                                ))}
                            </Stack>
                        </Box>
                    </Box>

                    {/* Right Column - Property Image */}
                    <Box className="w-full max-w-[389px] relative rounded-[30px] overflow-hidden shrink-0 hidden lg:block border-[5px] border-[#EEEEEE]">
                        <Image
                            src="/Image/Frame 52-2.png"
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
