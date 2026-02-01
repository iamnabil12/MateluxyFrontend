'use client';

import { Box, Flex, Text, Stack } from '@frooxi-labs/adaptive-ui';
import { useState, useCallback } from 'react';

// Functional Dual Range Slider Component
interface RangeSliderProps {
    label: string;
    min: number;
    max: number;
    minValue: number;
    maxValue: number;
    onMinChange: (value: number) => void;
    onMaxChange: (value: number) => void;
    unit: string;
    prefix?: string;
}

const DualRangeSlider = ({ label, min, max, minValue, maxValue, onMinChange, onMaxChange, unit, prefix = '' }: RangeSliderProps) => {
    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;

    return (
        <Box className="w-full">
            <Text className="text-[#6E6E6E] text-[16px] font-medium mb-4">{label}</Text>
            <Box className="relative w-full h-1 bg-[#E9E9E9] rounded-full mb-2">
                {/* Active range highlight */}
                <Box
                    className="absolute top-0 bottom-0 bg-[#00A1FF] rounded-full"
                    style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
                />
                {/* Min slider */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minValue}
                    onChange={(e) => {
                        const value = Math.min(Number(e.target.value), maxValue - 1);
                        onMinChange(value);
                    }}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                    style={{ pointerEvents: 'auto' }}
                />
                {/* Max slider */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxValue}
                    onChange={(e) => {
                        const value = Math.max(Number(e.target.value), minValue + 1);
                        onMaxChange(value);
                    }}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                    style={{ pointerEvents: 'auto' }}
                />
                {/* Min thumb visual */}
                <Box
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#00A1FF] rounded-full pointer-events-none shadow-md z-10"
                    style={{ left: `calc(${minPercent}% - 8px)` }}
                />
                {/* Max thumb visual */}
                <Box
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#00A1FF] rounded-full pointer-events-none shadow-md z-10"
                    style={{ left: `calc(${maxPercent}% - 8px)` }}
                />
            </Box>
            <Flex className="flex justify-between text-[10px] text-[#6E6E6E]">
                <Text>{prefix}{minValue.toLocaleString()} {unit}</Text>
                <Text>{prefix}{maxValue.toLocaleString()} {unit}</Text>
            </Flex>
        </Box>
    );
};

interface PropertyFilterProps {
    onClose?: () => void;
    isMobile?: boolean;
}

export const PropertyFilter = ({ onClose, isMobile = false }: PropertyFilterProps) => {
    const [selectedType, setSelectedType] = useState('Appartment');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('Buy');
    const [priceMin, setPriceMin] = useState(700);
    const [priceMax, setPriceMax] = useState(154000000);
    const [areaMin, setAreaMin] = useState(1289);
    const [areaMax, setAreaMax] = useState(5928);

    const propertyTypes = [
        { name: 'Appartment' },
        { name: 'Villa' },
        { name: 'Office' },
        { name: 'Condominiums' },
        { name: 'Townhouses' }
    ];

    const formatPrice = (value: number) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
        return value.toString();
    };

    return (
        <Box className={`w-full ${isMobile ? 'max-w-full' : 'max-w-[300px] border-2 border-[#E6E6E6] rounded-[10px]'} p-6 bg-white`}>
            <Flex className="flex justify-between items-center mb-6">
                <Text className="text-[24px] font-medium text-black">Filter</Text>
                {isMobile && onClose && (
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                )}
            </Flex>

            <Stack className="flex flex-col gap-8">
                {/* Location */}
                <Box>
                    <Text className="text-[#6E6E6E] text-[16px] font-medium mb-3">Location</Text>
                    <Box className="relative">
                        <input
                            type="text"
                            placeholder="Search location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full h-[50px] border border-[#E9E9E9] rounded-[10px] px-4 text-[14px] text-black placeholder:text-[#BBBBBB] focus:outline-none focus:border-[#00A1FF]"
                        />
                        <Box className="absolute right-4 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </Box>
                    </Box>
                </Box>

                {/* Property Type */}
                <Box>
                    <Text className="text-[#6E6E6E] text-[16px] font-medium mb-3">Property type</Text>
                    <Flex className="flex flex-wrap gap-2">
                        {propertyTypes.map((type) => (
                            <button
                                key={type.name}
                                onClick={() => setSelectedType(type.name)}
                                className={`px-4 py-2.5 rounded-[8px] text-[13px] font-medium transition-all flex items-center gap-2 border ${selectedType === type.name
                                    ? 'bg-[#00A1FF] text-white border-[#00A1FF]'
                                    : 'bg-white text-[#6E6E6E] border-[#E9E9E9] hover:border-[#00A1FF] hover:text-[#00A1FF]'
                                    }`}
                            >
                                {type.name === 'Appartment' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /></svg>
                                )}
                                {type.name === 'Villa' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                                )}
                                {type.name === 'Office' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /></svg>
                                )}
                                {type.name === 'Condominiums' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /></svg>
                                )}
                                {type.name === 'Townhouses' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                                )}
                                {type.name}
                            </button>
                        ))}
                    </Flex>
                </Box>

                {/* Category */}
                <Box>
                    <Text className="text-[#6E6E6E] text-[16px] font-medium mb-3">Category</Text>
                    <Box className="relative">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="appearance-none w-full h-[50px] border border-[#E9E9E9] rounded-[10px] px-4 text-[14px] text-black bg-white focus:outline-none focus:border-[#00A1FF] cursor-pointer"
                        >
                            <option>Buy</option>
                            <option>Rent</option>
                            <option>Offplan</option>
                        </select>
                        <Box className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6E6E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                        </Box>
                    </Box>
                </Box>

                {/* Price Range */}
                <DualRangeSlider
                    label="Price Range"
                    min={700}
                    max={154000000}
                    minValue={priceMin}
                    maxValue={priceMax}
                    onMinChange={setPriceMin}
                    onMaxChange={setPriceMax}
                    unit=""
                    prefix="AED "
                />

                {/* Property Area */}
                <DualRangeSlider
                    label="Property Area"
                    min={500}
                    max={10000}
                    minValue={areaMin}
                    maxValue={areaMax}
                    onMinChange={setAreaMin}
                    onMaxChange={setAreaMax}
                    unit="sq.ft"
                />

                {/* Apply Button for Mobile */}
                {isMobile && (
                    <button
                        onClick={onClose}
                        className="w-full h-[50px] bg-[#00A1FF] text-white rounded-[10px] font-medium text-[16px] hover:bg-[#0091E5] transition-colors"
                    >
                        Apply Filters
                    </button>
                )}
            </Stack>
        </Box>
    );
};
