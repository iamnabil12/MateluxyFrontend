'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import { MemberCard } from '../../team/components/MemberCard';
import { useState } from 'react';

// Mock data for Off-Plan specialists
const SPECIALISTS = [
    {
        name: "Abdullah Mahi",
        role: "Managing Director",
        department: "Marketing",
        image: "/Image/profile_4.png",
        languages: ["English", "Chinese"]
    },
    {
        name: "Abdullah Mahi",
        role: "Managing Director",
        department: "Marketing",
        image: "/Image/profile_4.png",
        languages: ["English", "Chinese"]
    },
    {
        name: "Abdullah Mahi",
        role: "Managing Director",
        department: "Marketing",
        image: "/Image/profile_4.png",
        languages: ["English", "Chinese"]
    },
];

const LOCATIONS = [
    "Jabel Ali",
    "Business Bay",
    "Downtown Dubai",
    "Dubai Land Residen...",
    "Burj Khalifa"
];

export const OffPlanSpecialists = () => {
    const [activeFilter, setActiveFilter] = useState("Jabel Ali");

    return (
        <Box className="w-full py-16">
            <Text
                className="text-[41px] font-medium mb-8 text-black px-4 md:px-8 xl:pl-[94px]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
                Our Off Plan Specialists
            </Text>

            <Flex className="px-4 md:px-8 xl:pl-[94px] gap-[30px]">
                {/* Filter Sidebar Container */}
                <Box className="w-[335px] h-[430px] bg-white border-2 border-[#E2E2E2] rounded-[20px] p-6 flex-shrink-0">
                    <Flex className="flex-col gap-[20px] justify-center h-full">
                        {LOCATIONS.map((location) => (
                            <Box
                                key={location}
                                onClick={() => setActiveFilter(location)}
                                className={`
                                    px-6 py-4 rounded-[14px] cursor-pointer transition-all
                                    ${activeFilter === location
                                        ? 'bg-[#00A8FF] text-white'
                                        : 'bg-transparent text-[#333333] hover:bg-gray-50'
                                    }
                                `}
                            >
                                <Text
                                    className="text-[16px] font-medium"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                                >
                                    {location}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                </Box>

                {/* Cards Grid */}
                <Box className="flex-1">
                    <Flex className="flex-wrap gap-[40px]">
                        {SPECIALISTS.map((specialist, idx) => (
                            <MemberCard
                                key={idx}
                                name={specialist.name}
                                role={specialist.role}
                                department={specialist.department}
                                image={specialist.image}
                                languages={specialist.languages}
                            />
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};
