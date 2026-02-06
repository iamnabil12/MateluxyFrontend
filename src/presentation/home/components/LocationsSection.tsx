'use client';

import { Box, Text, Flex } from '@frooxi-labs/adaptive-ui';
import Image from 'next/image';
import { GoogleMap, useJsApiLoader, Polygon, OverlayView } from '@react-google-maps/api';
import { api, TopLocation } from '../../../services/api';
import React, { useEffect, useState, useCallback } from 'react';

interface LocationData {
    name: string;
    count: number;
    color: string;
    latitude?: number;
    longitude?: number;
    offPlanCount?: number;
    rentCount?: number;
    sellCount?: number;
    subLocations?: {
        name: string;
        latitude: number;
        longitude: number;
    }[];
}

interface LocationCardProps {
    image: string;
    location: string;
    offPlan?: number;
    forRent?: number;
    forSell?: number;
}

const darkMapStyles = [
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
];

const lightMapStyles = [
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
];

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
                {offPlan !== undefined && (
                    <Box className="backdrop-blur-md text-white text-[9px] font-medium h-[30px] px-[10px] rounded-full whitespace-nowrap flex items-center" style={{ backgroundColor: 'rgba(200, 200, 200, 0.33)', fontFamily: 'Montserrat, sans-serif' }}>
                        {offPlan} Off Plan
                    </Box>
                )}

                {offPlan !== undefined && forRent !== undefined && (
                    <Box className="w-[2px] h-[14px] bg-white" />
                )}

                {forRent !== undefined && (
                    <Box className="backdrop-blur-md text-white text-[9px] font-medium h-[30px] px-[10px] rounded-full whitespace-nowrap flex items-center" style={{ backgroundColor: 'rgba(200, 200, 200, 0.33)', fontFamily: 'Montserrat, sans-serif' }}>
                        {forRent} for Rent
                    </Box>
                )}

                {(forRent !== undefined || offPlan !== undefined) && forSell !== undefined && (
                    <Box className="w-[2px] h-[14px] bg-white" />
                )}

                {forSell !== undefined && (
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
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        libraries: ['places', 'geometry'] // Ensure places lib is loaded for Geocoder
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



    const [topLocations, setTopLocations] = useState<LocationData[]>([]);
    const [boundaryPaths, setBoundaryPaths] = useState<Record<string, any[]>>({});
    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    // State for raw unified data
    const [unifiedData, setUnifiedData] = useState<any[]>([]);

    // Helper: Validate specific coords are roughly within UAE
    const isInUAE = (lat: number, lng: number) => {
        return lat >= 22.5 && lat <= 26.5 && lng >= 51.5 && lng <= 56.5;
    };

    // Map Bounds Effect
    useEffect(() => {
        if (map && topLocations.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            let hasValidLoc = false;

            topLocations.forEach(loc => {
                if (loc.latitude && loc.longitude && isInUAE(loc.latitude, loc.longitude)) {
                    bounds.extend({ lat: loc.latitude, lng: loc.longitude });
                    hasValidLoc = true;
                }
            });

            if (hasValidLoc) {
                map.fitBounds(bounds);
            }
        }
    }, [map, topLocations]);

    // 1. Initial Data Fetch (Unified Stats)
    useEffect(() => {
        const loadStats = async () => {
            const data = await api.getUnifiedTopLocations();
            setUnifiedData(data);
        };
        loadStats();
    }, []);

    // 2. Process Data on Tab/Data Change
    useEffect(() => {
        const processAndFetchBoundaries = async () => {
            const colors = ['#FF4444', '#7FFF00', '#4A90E2', '#B794F4'];
            const fallbacks = [
                { name: 'Downtown Dubai', offPlan: 10, forSell: 5, forRent: 8, total: 23 },
                { name: 'Dubai Marina', offPlan: 12, forSell: 15, forRent: 20, total: 47 },
                { name: 'Palm Jumeirah', offPlan: 8, forSell: 12, forRent: 5, total: 25 },
                { name: 'Business Bay', offPlan: 15, forSell: 8, forRent: 12, total: 35 },
            ];

            // Determine Sort Key based on Active Tab
            let sortKey = 'offPlan'; // Default
            if (activeTab === 'Buy') sortKey = 'forSell';
            if (activeTab === 'Rent') sortKey = 'forRent';

            // Filter & Sort
            let source = [...unifiedData];
            if (source.length === 0) source = [...fallbacks];

            // Sort desc by the active category count
            source.sort((a, b) => (b[sortKey] || 0) - (a[sortKey] || 0));

            // Take Top 8 candidates to account for resolution failures
            const candidates = source
                .filter(item => (item[sortKey] || 0) > 0)
                .slice(0, 8);

            // Map to Processing Format
            const itemsToResolve = candidates.map((item, index) => {
                return {
                    name: (item.name || 'Unknown').split(',')[0].trim(),
                    baseCount: item[sortKey] || 0,
                    // Preserve all stats
                    offPlan: item.offPlan || 0,
                    forRent: item.forRent || 0,
                    forSell: item.forSell || 0,
                    originalItem: item
                };
            });

            // Trigger Boundary Fetch & Resolution
            const results = await Promise.allSettled(itemsToResolve.map(async (loc) => {
                let name = loc.name;

                // Name Cleaning for better OSM matches
                if (name.toLowerCase() === 'dubai land') name = 'Dubailand';
                if (name.toLowerCase() === 'jumeirah village circle') name = 'Jumeirah Village Circle'; // explicit keep

                const cacheKey = `osm_boundary_v5_${name}`;
                const cached = localStorage.getItem(cacheKey);

                if (cached) {
                    try {
                        const parsed = JSON.parse(cached);
                        if (parsed.paths && parsed.paths.length > 0) {
                            return {
                                name: loc.name, // Keep original name
                                paths: parsed.paths,
                                center: parsed.center,
                                count: loc.baseCount,
                                offPlan: loc.offPlan,
                                forRent: loc.forRent,
                                forSell: loc.forSell
                            };
                        }
                        // If cached point-only
                        if (parsed.center) {
                            return {
                                name: loc.name,
                                paths: null,
                                center: parsed.center,
                                count: loc.baseCount,
                                offPlan: loc.offPlan,
                                forRent: loc.forRent,
                                forSell: loc.forSell
                            };
                        }
                    } catch (e) { }
                }

                // Cache Miss - Fetch
                const variations = [
                    name.includes('Dubai') ? name : `${name}, Dubai`,
                    `${name}, United Arab Emirates`
                ];

                // 1. Try to find a Polygon
                for (const query of variations) {
                    try {
                        const res = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(query)}&polygon_geojson=1&format=json`);
                        const data = await res.json();
                        if (data && data.length > 0) {
                            // Prefer Polygon results
                            const result = data.find((d: any) =>
                                d.geojson && (d.geojson.type === 'Polygon' || d.geojson.type === 'MultiPolygon')
                            );

                            if (result) {
                                const lat = parseFloat(result.lat);
                                const lon = parseFloat(result.lon);

                                // STRICT CHECK: Must be in UAE
                                if (!isInUAE(lat, lon)) continue;

                                const geo = result.geojson;
                                let paths: any[] = [];
                                if (geo.type === 'Polygon') {
                                    paths = geo.coordinates[0].map((coord: number[]) => ({ lat: coord[1], lng: coord[0] }));
                                } else if (geo.type === 'MultiPolygon') {
                                    paths = geo.coordinates[0][0].map((coord: number[]) => ({ lat: coord[1], lng: coord[0] }));
                                }
                                if (paths.length > 0) {
                                    const cacheData = { paths, center: { lat, lng: lon } };
                                    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
                                    return {
                                        name: loc.name,
                                        paths,
                                        center: { lat, lng: lon },
                                        count: loc.baseCount,
                                        offPlan: loc.offPlan,
                                        forRent: loc.forRent,
                                        forSell: loc.forSell
                                    };
                                }
                            }
                        }
                    } catch (err) { }
                    await new Promise(r => setTimeout(r, 200));
                }

                // 2. Fallback: Point Only
                try {
                    const fallbackQuery = name.includes('Dubai') ? name : `${name}, Dubai`;
                    const res = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(fallbackQuery)}&format=json`);
                    const data = await res.json();
                    if (data && data.length > 0) {
                        const result = data[0];
                        const lat = parseFloat(result.lat);
                        const lon = parseFloat(result.lon);
                        // STRICT CHECK: Must be in UAE
                        if (isInUAE(lat, lon)) {
                            // Cache point result too to save calls
                            localStorage.setItem(cacheKey, JSON.stringify({ center: { lat, lng: lon } }));
                            return {
                                name: loc.name,
                                paths: null,
                                center: { lat, lng: lon },
                                count: loc.baseCount,
                                offPlan: loc.offPlan,
                                forRent: loc.forRent,
                                forSell: loc.forSell
                            };
                        }
                    }
                } catch (e) { }

                return null; // Failed or outside UAE
            }));

            // Filter Valid Results and Take Top 4
            // Filter Valid Results and Take Top 4
            const validLocations: any[] = [];
            const newBoundaryPaths: Record<string, any[]> = {};

            results.forEach(res => {
                if (res.status === 'fulfilled' && res.value) {
                    const val = res.value;
                    if (val.center) {
                        validLocations.push({
                            name: val.name,
                            count: val.count,
                            latitude: val.center.lat,
                            longitude: val.center.lng,
                            offPlanCount: val.offPlan,
                            rentCount: val.forRent,
                            sellCount: val.forSell,
                            color: '', // Assign colors after slicing
                        });
                        // Only add paths if they exist
                        if (val.paths) {
                            newBoundaryPaths[val.name] = val.paths;
                        }
                    }
                }
            });

            // Slice Top 4 Valid
            const finalLocations = validLocations.slice(0, 4).map((loc, index) => ({
                ...loc,
                color: colors[index % colors.length]
            }));

            setBoundaryPaths(prev => ({ ...prev, ...newBoundaryPaths }));
            setTopLocations(finalLocations);
        };

        if (unifiedData.length > 0 || !isLoaded) { // simplified condition
            processAndFetchBoundaries();
        }
    }, [unifiedData, activeTab, isLoaded, map]);

    const mapOptions = {
        disableDefaultUI: false, // Allow UI
        zoomControl: true,       // Enable Zoom
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: true,       // Enable Scroll
        disableDoubleClickZoom: false,
        gestureHandling: 'auto' as const, // Allow gestures
        styles: isDarkMode ? darkMapStyles : lightMapStyles,
        minZoom: 8, // Prevent zooming out too far
        maxZoom: 20,
        restriction: {
            latLngBounds: {
                north: 26.5,
                south: 22.5,
                west: 51.5,
                east: 56.5,
            },
            strictBounds: false, // Soft limit (bounces back)
        },
    };

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
                                backgroundColor: 'rgba(255, 255, 255, 0.45)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                                border: '1px solid rgba(255, 255, 255, 0.18)'
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
                                    onLoad={onLoad}
                                    onUnmount={onUnmount}
                                >

                                    {/* Render Polygons and Markers Separately to avoid nesting issues */}
                                    {topLocations.map((loc) => {
                                        if (!loc.latitude || !loc.longitude) return null;
                                        const path = boundaryPaths[loc.name] && boundaryPaths[loc.name].length > 0
                                            ? boundaryPaths[loc.name]
                                            : null; // Don't show hexagon fallback to avoid confusion if loading real shape

                                        return (
                                            <React.Fragment key={`elements-${loc.name}`}>
                                                {path && <Polygon
                                                    paths={path}
                                                    options={{
                                                        strokeColor: '#B8B8B8',
                                                        strokeOpacity: 0,
                                                        strokeWeight: 2,
                                                        fillColor: loc.color,
                                                        fillOpacity: 0.15,
                                                        // @ts-ignore
                                                        icons: [{
                                                            icon: {
                                                                path: 'M 0,-1 0,1',
                                                                strokeOpacity: 1,
                                                                strokeColor: '#B8B8B8',
                                                                scale: 4
                                                            },
                                                            offset: '0',
                                                            repeat: '20px'
                                                        }]
                                                    }}
                                                />}
                                                <OverlayView
                                                    position={{ lat: loc.latitude, lng: loc.longitude }}
                                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                                >
                                                    <Box className="relative flex flex-col items-center transform -translate-x-1/2 -translate-y-full pointer-events-none">
                                                        {/* Pin */}
                                                        <Box className="relative">
                                                            <svg width="40" height="48" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                                                                <path d="M17 0C7.61116 0 0 7.61116 0 17C0 29.75 17 42.5 17 42.5C17 42.5 34 29.75 34 17C34 7.61116 26.3888 0 17 0Z" fill={loc.color} />
                                                                <circle cx="17" cy="17" r="6" fill="white" />
                                                            </svg>
                                                        </Box>

                                                        {/* Label - Only Count */}
                                                        <Box
                                                            className={`mt-1 px-3 py-1 rounded-full   ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                                        >
                                                            <Text className="text-[11px] font-semibold whitespace-nowrap">
                                                                {loc.count} Properties
                                                            </Text>
                                                        </Box>
                                                    </Box>
                                                </OverlayView>
                                            </React.Fragment>
                                        );
                                    })}
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
                        {topLocations.length > 0 ? (
                            topLocations.map((loc, index) => (
                                <LocationCard
                                    key={index}
                                    image="/Image/property.png"
                                    location={loc.name.split(',')[0]}
                                    offPlan={loc.offPlanCount}
                                    forRent={loc.rentCount}
                                    forSell={loc.sellCount}
                                />
                            ))
                        ) : (
                            <Text className="text-gray-400 p-4">No location data available.</Text>
                        )}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};
