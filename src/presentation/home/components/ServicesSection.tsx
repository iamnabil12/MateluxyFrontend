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
    <Box className="w-full max-w-[387px] h-[408px] bg-transparent rounded-[20px] p-6 border border-[#EEEEEE] relative overflow-hidden">
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
                                showArrow={false}
                            >
                                <Box className="h-[250px] relative mt-4">
                                    {/* Network Visualization with 5 Profiles */}
                                    <Box className="absolute inset-0 flex items-center justify-center">
                                        <svg width="100%" height="100%" viewBox="0 0 350 250" className="absolute inset-0">
                                            {/* Connecting curves from center to surrounding circles */}
                                            {/* Top to bottom-left */}
                                            <path
                                                d="M 175 60 Q 100 120 60 170"
                                                stroke="#E0E0E0"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeDasharray="5,5"
                                            />
                                            {/* Top to left-middle */}
                                            <path
                                                d="M 175 60 Q 140 130 100 200"
                                                stroke="#E0E0E0"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeDasharray="5,5"
                                            />
                                            {/* Top to right-middle */}
                                            <path
                                                d="M 175 60 Q 210 130 250 200"
                                                stroke="#E0E0E0"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeDasharray="5,5"
                                            />
                                            {/* Top to bottom-right */}
                                            <path
                                                d="M 175 60 Q 250 120 290 170"
                                                stroke="#E0E0E0"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeDasharray="5,5"
                                            />
                                        </svg>

                                        {/* Profile Circles */}
                                        {/* Center top circle - Profile 1 */}
                                        <Box className="absolute" style={{ top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                            <Box className="w-[80px] h-[80px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                <Image
                                                    src="/Image/profile_1.png"
                                                    alt="Team member 1"
                                                    width={80}
                                                    height={80}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Box>
                                        </Box>

                                        {/* Bottom left circle - Profile 2 */}
                                        <Box className="absolute" style={{ bottom: '10px', left: '10px' }}>
                                            <Box className="w-[70px] h-[70px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                <Image
                                                    src="/Image/profile_2.png"
                                                    alt="Team member 2"
                                                    width={70}
                                                    height={70}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Box>
                                        </Box>

                                        {/* Left middle circle - Profile 3 */}
                                        <Box className="absolute" style={{ bottom: '0px', left: '60px' }}>
                                            <Box className="w-[70px] h-[70px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                <Image
                                                    src="/Image/profile_3.png"
                                                    alt="Team member 3"
                                                    width={70}
                                                    height={70}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Box>
                                        </Box>

                                        {/* Right middle circle - Profile 4 */}
                                        <Box className="absolute" style={{ bottom: '0px', right: '60px' }}>
                                            <Box className="w-[70px] h-[70px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                <Image
                                                    src="/Image/profile_4.png"
                                                    alt="Team member 4"
                                                    width={70}
                                                    height={70}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Box>
                                        </Box>

                                        {/* Bottom right circle - Profile 5 */}
                                        <Box className="absolute" style={{ bottom: '10px', right: '10px' }}>
                                            <Box className="w-[70px] h-[70px] rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                <Image
                                                    src="/Image/profile_5.png"
                                                    alt="Team member 5"
                                                    width={70}
                                                    height={70}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Box>
                                        </Box>
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
