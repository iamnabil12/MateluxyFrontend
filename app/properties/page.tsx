'use client';

import { Box, Flex, Text } from '@frooxi-labs/adaptive-ui';
import { Header2 } from '@/src/presentation/components/properties/Header2';
import { PropertyFilter } from '@/src/presentation/components/properties/PropertyFilter';
import { PropertyCard, PropertyCardProps } from '@/src/components/PropertyCard';
import Image from 'next/image';
import { useState } from 'react';

const baseProperties: PropertyCardProps[] = [
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
        developer: 'NAKHEEL',
        agent: { name: 'Tanvir Almas', languages: 'Speaks English, Bengali', avatar: '/Image/BGimage.png' }
    },
];

// Generate 24 items
const sampleProperties = Array.from({ length: 4 }).flatMap(() => baseProperties);

export default function PropertiesPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [sortBy, setSortBy] = useState('Newest');
    const [isSortOpen, setIsSortOpen] = useState(false);

    const sortOptions = ['Newest', 'Oldest', 'A-Z', 'Z-A', 'Price: Low to High', 'Price: High to Low'];

    const handleCloseFilter = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsFilterOpen(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    return (
        <main className="bg-white min-h-screen">
            <Header2 />

            <Box className="w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 pb-20">
                <Flex className="flex flex-col lg:flex-row gap-8 lg:items-stretch w-full">
                    {/* Filter Sidebar Column - stretches to match grid height (DESKTOP ONLY) */}
                    <Box className="hidden lg:block w-full lg:w-[300px] shrink-0 self-stretch">
                        {/* This inner div IS sticky */}
                        <div className="lg:sticky lg:top-8">
                            <PropertyFilter />
                        </div>
                    </Box>

                    {/* Properties Grid Area */}
                    <Box className="flex-1 w-full min-w-0">
                        {/* Results Header */}
                        <Flex className="flex justify-between items-center mb-6">
                            <Text className="text-gray-500 text-[16px]">256 properties found</Text>
                            <Flex className="flex items-center gap-3">
                                {/* Mobile Filter Button */}
                                <button
                                    onClick={() => setIsFilterOpen(true)}
                                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[#E6E6E6] rounded-[8px] text-[14px] text-gray-600 hover:border-[#00A1FF] hover:text-[#00A1FF] transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                    Filter
                                </button>
                                {/* Sort By Dropdown */}
                                <Box className="relative">
                                    <Flex
                                        onClick={() => setIsSortOpen(!isSortOpen)}
                                        className="flex items-center gap-2 cursor-pointer group whitespace-nowrap px-3 py-2 border border-transparent hover:border-[#E6E6E6] rounded-[8px] transition-colors"
                                    >
                                        <Text className="text-gray-500 text-[14px] group-hover:text-black transition-colors">Sort by: {sortBy}</Text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`}>
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </Flex>
                                    {isSortOpen && (
                                        <>
                                            <Box className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)} />
                                            <Box className="absolute right-0 top-full mt-2 bg-white border border-[#E6E6E6] rounded-[10px] shadow-lg py-2 min-w-[180px] z-50">
                                                {sortOptions.map((option) => (
                                                    <button
                                                        key={option}
                                                        onClick={() => {
                                                            setSortBy(option);
                                                            setIsSortOpen(false);
                                                        }}
                                                        className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-[#F7F7F7] transition-colors ${sortBy === option ? 'text-[#00A1FF] font-medium' : 'text-gray-600'}`}
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            </Flex>
                        </Flex>

                        {/* Grid */}
                        <Box className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[15px]">
                            {sampleProperties.map((property, index) => (
                                <PropertyCard key={index} {...property} />
                            ))}
                        </Box>
                    </Box>
                </Flex>
            </Box>

            {/* Mobile Filter Modal */}
            {(isFilterOpen || isClosing) && (
                <Box className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <Box
                        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
                        onClick={handleCloseFilter}
                    />
                    {/* Modal Content */}
                    <Box className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] max-h-[90vh] overflow-y-auto ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}>
                        <Box className="p-4">
                            <PropertyFilter onClose={handleCloseFilter} isMobile={true} />
                        </Box>
                    </Box>
                </Box>
            )}
        </main>
    );
}
