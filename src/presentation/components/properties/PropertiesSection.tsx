'use client';

import { Box, Text, Flex, Stack } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';
import { useState } from 'react';

interface PropertyCardProps {
    image: string;
    title: string;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
    price: string;
    type: string;
    badge?: string;
    agent: {
        name: string;
        languages: string;
        avatar: string;
    };
    developer?: string;
}

const PropertyCard = ({
    image,
    title,
    address,
    beds,
    baths,
    sqft,
    price,
    type,
    badge,
    agent,
    developer
}: PropertyCardProps) => (
    <Box className="w-full max-w-[417px] h-[486px] bg-transparent rounded-[20px] px-[15px] pt-[15px] pb-4 flex flex-col border border-[#E6E6E6] overflow-hidden">
        {/* Image Section */}
        <Box className="relative w-[387px] h-[250px] rounded-[13px] overflow-hidden self-center shrink-0">
            <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
            />
            {/* Badges */}
            <Flex className="flex absolute top-4 left-4 gap-2">
                {badge && (
                    <Box className="bg-[#FF1111]/50 text-white text-[9px] font-medium px-3 py-1 rounded-full flex items-center justify-center">
                        {badge}
                    </Box>
                )}
                <Box className="bg-[#FF1111]/50 text-white text-[9px] font-medium px-3 py-1 rounded-full flex items-center justify-center">
                    Q4 2027
                </Box>
            </Flex>
            {/* Type Badge */}
            <Box className="absolute bottom-4 left-4 bg-[#C6EAFF]/40 backdrop-blur-sm text-[#FFFFFF] text-[15px] font-medium px-3 py-1.5 rounded-[5px] border border-[#25AFFF]/60">
                {type}
            </Box>
            {/* Price */}
            <Box className="absolute bottom-4 right-4 text-white font-semibold text-[24px]">
                {price}
            </Box>
        </Box>

        {/* Content Section */}
        <Box className="pt-5 px-1 flex flex-col justify-between flex-1">
            <Text className="font-medium text-[24px] text-black mb-2 truncate">{title}</Text>
            <Flex className="flex items-center gap-1 mb-3">
                <Box className="w-4 h-4 relative flex items-center justify-center">
                    <Image
                        src="/locationround.svg"
                        alt="Location"
                        width={16}
                        height={16}
                    />
                </Box>
                <Text className="text-gray-500 font-medium text-[16px] truncate">{address}</Text>
            </Flex>

            {/* Features */}
            <Flex className="flex items-center gap-4 mb-4 text-gray-600 text-[13px]">
                <Flex className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"></path>
                        <path d="M21 10V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
                    </svg>
                    <Text>{beds}</Text>
                </Flex>
                <Flex className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6"></path>
                    </svg>
                    <Text>{baths}</Text>
                </Flex>
                <Flex className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    </svg>
                    <Text>{sqft} sq.ft</Text>
                </Flex>
            </Flex>

            {/* Agent/Developer Info */}
            <Flex className="flex items-center justify-between pt-3 border-t border-gray-100">
                {developer ? (
                    <Box>
                        <Text className="text-gray-400 text-[11px]">Developed by</Text>
                        <Text className="font-bold text-[14px] text-black">{developer}</Text>
                    </Box>
                ) : (
                    <Flex className="flex items-center gap-2">
                        <Box className="w-[50px] h-[50px] rounded-full bg-gray-200 overflow-hidden relative">
                            <Image
                                src={agent.avatar}
                                alt={agent.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                        <Box>
                            <Text className="font-normal text-[16px] text-black">{agent.name}</Text>
                            <Text className="font-normal text-[13px] text-black/40">{agent.languages}</Text>
                        </Box>
                    </Flex>
                )}
                <Flex className="flex items-center gap-2">
                    <Box className="w-[31.5px] h-[31.5px] rounded-full bg-green-50 flex items-center justify-center cursor-pointer hover:bg-green-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        </svg>
                    </Box>
                    <Box className="w-[31.5px] h-[31.5px] rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    </Box>
);

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
