'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';

export const ManagementBenefits = () => {
    return (
        <Box className="container mx-auto px-4 py-16 pb-24">
            <Flex className="flex-col lg:flex-row gap-12 items-center">

                {/* Left: Image Collage (Arch Shape) */}
                <Box className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px]">
                    {/* Background Blob/Shape */}
                    <Box className="absolute inset-0 bg-gray-100 rounded-t-full opacity-50" />

                    {/* Main Image Masked */}
                    <Box className="absolute inset-4 rounded-t-full overflow-hidden border-[8px] border-white shadow-lg">
                        <Image
                            src="/Image/TeamHeroImage.png" // Placeholder
                            alt="Property Management Team"
                            fill
                            className="object-cover"
                        />
                    </Box>
                </Box>

                {/* Right: Text Content */}
                <Box className="w-full lg:w-1/2 text-black">
                    <Text className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                        Choosing The Right Property <br /> Management Partner
                    </Text>

                    <Text className="text-gray-600 text-sm leading-relaxed mb-6">
                        Entrusting Your Rental Property To The Right Agency Is A Big Decision. At Mateluxy Real Estate, We Combine Professionalism, RERA Certification, And A Proven Track Record Of Five-Star Client Satisfaction To Give You Absolute Peace Of Mind.
                    </Text>

                    <Text className="text-gray-600 text-sm leading-relaxed mb-6">
                        We Offer A Complete, High-End Property Management Solution — From Marketing And Advertising Your Villa Or Apartment, Sourcing And Screening Quality Tenants, Handling All Admin Issues, Collecting Payments, Overseeing Leasing Inspections, To Arranging Professional Cleaning, Maintenance, And Full Compliance With Dubai’s Latest Real Estate Regulations.
                    </Text>

                    <Text className="text-gray-600 text-sm leading-relaxed">
                        With Mateluxy, Your Investment Is In Expert Hands — Managed With Precision, Care, And A Commitment To Excellence.
                    </Text>
                </Box>

            </Flex>
        </Box>
    );
};
