'use client';

import { Box, Text, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';
import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface LocationData {
    name: string;
    count: number;
    color: string;
}

interface LocationCardProps {
    image: string;
    location: string;
    offPlan?: number;
    forRent?: number;
    forSell?: number;
}

const LocationCard = ({ image, location, offPlan, forRent, forSell }: LocationCardProps) => (
    <Box className="min-w-[326px] h-[219px] rounded-[20px] overflow-hidden relative flex-shrink-0 cursor-pointer group">
        <Image
            src={image}
            alt={location}
            fill
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-110 transition-transform duration-300"
        />
        {/* Gradient Overlay */}
        <Box className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Bottom Blur Effect */}
        <Box
            className="absolute bottom-0 left-0 right-0 h-[120px] backdrop-blur-sm"
            style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
            }}
        />

        {/* Arrow Icon */}
        <Box className="absolute top-3 right-3 w-[40px] h-[40px] bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Image
                src="/Arrow.svg"
                alt="Arrow"
                width={13}
                height={13}
            />
        </Box>



        {/* Location and Stats */}
        <Box className="absolute bottom-[24px] left-[21px] right-3">
            <Text className="text-white font-semibold text-[21px] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{location}</Text>
            <Flex className="flex items-center gap-[9px] mt-3">
                {offPlan && (
                    <Box className="backdrop-blur-md text-white text-[9px] font-medium h-[30px] px-[10px] rounded-full whitespace-nowrap flex items-center" style={{ backgroundColor: 'rgba(200, 200, 200, 0.33)', fontFamily: 'Montserrat, sans-serif' }}>
                        {offPlan} Off Plan
                    </Box>
                )}

                {offPlan && forRent && (
                    <Box className="w-[2px] h-[14px] bg-white" />
                )}

                {forRent && (
                    <Box className="backdrop-blur-md text-white text-[9px] font-medium h-[30px] px-[10px] rounded-full whitespace-nowrap flex items-center" style={{ backgroundColor: 'rgba(200, 200, 200, 0.33)', fontFamily: 'Montserrat, sans-serif' }}>
                        {forRent} for Rent
                    </Box>
                )}

                {forRent && forSell && (
                    <Box className="w-[2px] h-[14px] bg-white" />
                )}

                {forSell && (
                    <Box className="backdrop-blur-md text-white text-[9px] font-medium h-[30px] px-[10px] rounded-full whitespace-nowrap flex items-center" style={{ backgroundColor: 'rgba(200, 200, 200, 0.33)', fontFamily: 'Montserrat, sans-serif' }}>
                        {forSell} for Sell
                    </Box>
                )}
            </Flex>
        </Box>
    </Box>
);

export const LocationsSection = () => {
    const [activeTab, setActiveTab] = useState<'Buy' | 'Rent' | 'Off Plan'>('Buy');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    });

    const mapContainerStyle = {
        width: '100%',
        height: '100%'
    };

    // Dubai coordinates
    const center = {
        lat: 25.2048,
        lng: 55.2708
    };

    const mapOptions = {
        disableDefaultUI: true,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        gestureHandling: 'none' as const,
        styles: isDarkMode ? [
            // Dark minimalist mode styles (matching the uploaded image)
            {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#2b2b2b" }]
            },
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ffffff" }]
            },
            {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#242f3e" }, { lightness: -20 }]
            },
            {
                featureType: "administrative",
                elementType: "all",
                stylers: [{ visibility: "on" }]
            },
            {
                featureType: "administrative.country",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "administrative.province",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "administrative.locality",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#2b2b2b" }]
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#3d3d3d" }]
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f1f1f" }]
            },
            {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#3d3d3d" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f1f1f" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ color: "#353535" }]
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#1f1f1f" }]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b6b6b" }]
            }
        ] : [
            // Light minimalist mode styles (matching the uploaded image)
            {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }]
            },
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }]
            },
            {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#d6d6d6" }]
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }]
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }]
            },
            {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#e8e8e8" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }]
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#b3b3b3" }]
            }
        ]
    };

    const topLocations: LocationData[] = [
        { name: 'Burj Khalifa', count: 246, color: '#FF4444' },
        { name: 'Dubai Mall', count: 153, color: '#7FFF00' },
        { name: 'Dubai Marina', count: 78, color: '#4A90E2' },
        { name: 'Jabel Ali', count: 34, color: '#B794F4' },
    ];

    const locationCards: LocationCardProps[] = [
        { image: '/Image/property.png', location: 'Abu Dhabi', offPlan: 16, forRent: 34, forSell: 12 },
        { image: '/Image/property.png', location: 'Abu Dhabi', offPlan: 16, forRent: 34, forSell: 12 },
        { image: '/Image/property.png', location: 'Abu Dhabi', offPlan: 16, forRent: 34, forSell: 12 },
        { image: '/Image/property.png', location: 'Abu Dhabi', offPlan: 16, forRent: 34, forSell: 12 },
    ];

    return (
        <Box as="section" className="w-full bg-[#FFFFFF] py-16 px-4 md:px-8 lg:px-16">
            <Box className="w-full max-w-[1300px] mx-auto">
                {/* Header */}
                <Flex className="flex flex-col items-start mb-10 gap-6">
                    <Text className="text-[45px] font-normal text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Discover properties in your <Text as="span" className="font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>Desired Locations</Text>
                    </Text>

                    {/* Tabs */}
                    {/* Tabs */}
                    <Box className="bg-[#EDEDED] p-1.5 rounded-full inline-flex items-center">
                        {(['Buy', 'Rent', 'Off Plan'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    px-8 py-2.5 rounded-full text-[16px] font-semibold transition-all duration-300 font-montserrat
                                    ${activeTab === tab
                                        ? 'bg-white text-black shadow-sm'
                                        : 'text-[#6D6D6D] hover:text-black'
                                    }
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </Box>
                </Flex>

                {/* Map Section */}
                <Box className="w-full max-w-[1280px] h-[549px] bg-gray-100 rounded-[30px] overflow-hidden relative mb-8">
                    {/* Map Container */}
                    <Flex className="w-full h-full relative">
                        {/* Left Panel - Top Locations */}
                        <Box
                            className="absolute bottom-6 left-6 w-[369px] h-[244px] rounded-[20px] p-5 z-10"
                            style={{
                                backgroundColor: 'rgba(148, 148, 148, 0.13)',
                                backdropFilter: 'blur(9px)',
                                WebkitBackdropFilter: 'blur(9px)'
                            }}
                        >
                            <Text className={`text-[26px] font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>Top Locations</Text>
                            {/* Divider Line */}
                            <Box className="w-full h-[1px] mb-4" style={{ backgroundColor: '#E1E1E1' }} />
                            <Box className="flex flex-col gap-3">
                                {topLocations.map((location) => (
                                    <Flex key={location.name} className="flex items-center justify-between">
                                        <Flex className="flex items-center gap-2">
                                            <Box
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: location.color }}
                                            />
                                            <Text className={`text-[14px] ${isDarkMode ? 'text-white' : 'text-black'}`}>{location.name}</Text>
                                        </Flex>
                                        <Text className={`text-[13px] ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{location.count} Properties</Text>
                                    </Flex>
                                ))}
                            </Box>
                        </Box>

                        {/* Google Map */}
                        <Box className="w-full h-full relative">
                            {isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={center}
                                    zoom={11}
                                    options={mapOptions}
                                >
                                </GoogleMap>
                            ) : (
                                <Box className={`w-full h-full flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
                                    <Text className={`text-lg ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Loading Map...</Text>
                                </Box>
                            )}

                            {/* Dark/Light Mode Toggle (top right) */}
                            <Box
                                className="absolute top-6 right-6 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform z-10"
                                style={{ backgroundColor: 'rgba(205, 205, 205, 0.5)' }}
                                onClick={() => setIsDarkMode(!isDarkMode)}
                            >
                                {isDarkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                )}
                            </Box>
                        </Box>
                    </Flex>
                </Box>

                {/* Location Cards Scroll */}
                <Box className="w-full overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <Flex className="flex gap-5 pb-4">
                        {locationCards.map((card, index) => (
                            <LocationCard key={index} {...card} />
                        ))}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};
