'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

export const ManagementBenefits = () => {
    return (
        <Box className="relative w-full py-16 pb-24 overflow-hidden">
            {/* Background Texture */}
            <Box className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/Image/guidepagebg.png"
                    alt="Background"
                    fill
                    className="object-fill object-center"
                />
            </Box>

            {/* Content */}
            <Box className="relative z-10 container mx-auto px-4">
                <Flex className="flex-col lg:flex-row gap-12 items-center">

                    {/* Left: Image Rectangle */}
                    <Box className="relative w-full lg:w-auto lg:flex-shrink-0">
                        <Box className="relative w-full h-[330px] lg:w-[650px] lg:h-[460px] rounded-lg overflow-hidden">
                            <Image
                                src="/Image/TeamHeroImage.png"
                                alt="Property Management Team"
                                fill
                                className="object-cover"
                            />
                        </Box>
                    </Box>

                    {/* Right: Text Content */}
                    <Box className="w-full lg:w-1/2 text-black">
                        <Text
                            className="text-[35px] font-semibold mb-8 leading-tight"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            Choosing The Right Property <br /> Management Partner
                        </Text>

                        <Text
                            className="text-[16px] font-normal text-gray-600 leading-relaxed mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            Entrusting your rental property to the right agency is a big decision. At Mateluxy Real Estate, we combine professionalism, RERA certification, and a proven track record of five-star client satisfaction to give you absolute peace of mind.
                        </Text>

                        <Text
                            className="text-[16px] font-normal text-gray-600 leading-relaxed mb-6"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            We offer a complete, high-end property management solution — from marketing and advertising your villa or apartment, sourcing and screening quality tenants, handling all administration, collecting payments, overseeing leasing inspections, to arranging professional cleaning, maintenance, and full compliance with Dubai's latest real estate regulations.
                        </Text>

                        <Text
                            className="text-[16px] font-normal text-gray-600 leading-relaxed"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                            With Mateluxy, your investment is in expert hands — managed with precision, care, and a commitment to excellence.
                        </Text>
                    </Box>

                </Flex>
            </Box>
        </Box>
    );
};
