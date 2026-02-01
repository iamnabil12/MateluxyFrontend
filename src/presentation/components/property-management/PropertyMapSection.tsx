'use client';

import { Box, Text } from '@frooxi-labs/adaptive-ui';
import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

// Coordinates for mock locations
const LOCATIONS = {
    BURJ_KHALIFA: { lat: 25.1972, lng: 55.2744 },
    DUBAI_MALL: { lat: 25.1985, lng: 55.2796 },
    DUBAI_MARINA: { lat: 25.0805, lng: 55.1403 },
    JABEL_ALI: { lat: 25.0236, lng: 55.0403 },
};

// Map Container Style
const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '30px',
};

// Center of Dubai
const center = {
    lat: 25.1300,
    lng: 55.2000,
};

// Custom Gray/Silver Map Style
const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    scrollwheel: false,
    styles: [
        {
            "elementType": "geometry",
            "stylers": [{ "color": "#f5f5f5" }]
        },
        {
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#616161" }]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#f5f5f5" }]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#bdbdbd" }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "color": "#eeeeee" }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ "color": "#e5e5e5" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "color": "#ffffff" }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{ "color": "#dadada" }]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#616161" }]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{ "color": "#e5e5e5" }]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{ "color": "#eeeeee" }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#c9c9c9" }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }]
        }
    ]
};

// Define Polygon coordinates (approximate triangles/shapes)
const getPolygonPath = (center: { lat: number, lng: number }, radius: number) => {
    const angle = 2 * Math.PI / 3; // Triangle
    return [
        { lat: center.lat + radius, lng: center.lng },
        { lat: center.lat - radius / 2, lng: center.lng + radius * Math.sin(angle) },
        { lat: center.lat - radius / 2, lng: center.lng - radius * Math.sin(angle) },
    ];
};

export const PropertyMapSection = () => {
    // API Key from environment variable
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    const polygons = useMemo(() => [
        {
            path: getPolygonPath(LOCATIONS.BURJ_KHALIFA, 0.015),
            color: '#FF0000', // Red
            count: 256
        },
        {
            path: getPolygonPath(LOCATIONS.DUBAI_MALL, 0.012),
            color: '#00FF00', // Green
            count: 153
        },
        {
            path: getPolygonPath(LOCATIONS.DUBAI_MARINA, 0.02),
            color: '#0000FF', // Blue
            count: 78
        },
        {
            path: getPolygonPath(LOCATIONS.JABEL_ALI, 0.025),
            color: '#800080', // Purple
            count: 34
        },
    ], []);

    return (
        <Box as="section" className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
            <Box className="max-w-7xl mx-auto space-y-10">
                <Text as="h2" className="text-[32px] md:text-[40px] font-bold text-black leading-tight max-w-2xl">
                    Trusted by Landlords Across Dubai's Top Locations
                </Text>

                <div className="relative w-full h-[500px] md:h-[600px] rounded-[30px] overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={11}
                            options={mapOptions}
                        >
                            {/* Render Polygons */}
                            {polygons.map((poly, index) => (
                                <Polygon
                                    key={index}
                                    paths={poly.path}
                                    options={{
                                        fillColor: poly.color,
                                        fillOpacity: 0.2,
                                        strokeColor: poly.color,
                                        strokeOpacity: 0.8,
                                        strokeWeight: 2,
                                    }}
                                />
                            ))}

                            {/* Render Markers/Info (Simplified as Markers usually, or custom overlays) */}
                            {typeof google !== 'undefined' && polygons.map((poly, index) => (
                                <Marker
                                    key={`marker-${index}`}
                                    position={poly.path[0]} // Position at top vertex
                                    label={{
                                        text: `${poly.count} Properties`,
                                        className: "map-marker-label", // We would need global CSS for this to style perfectly
                                        color: "#000000",
                                        fontSize: "14px",
                                        fontWeight: "bold"
                                    }}
                                    icon={{
                                        path: google.maps.SymbolPath.CIRCLE,
                                        scale: 5,
                                        fillColor: poly.color,
                                        fillOpacity: 1,
                                        strokeWeight: 2,
                                        strokeColor: "white",
                                    }}
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>

                    {/* Overlay Card - Top Locations */}
                    <div className="absolute bottom-6 left-6 z-10 bg-white/80 backdrop-blur-md p-6 rounded-[20px] shadow-lg border border-white/50 w-[280px]">
                        <h3 className="text-xl font-bold text-black mb-4">Top Locations</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <span className="text-sm font-medium text-gray-800">Burj Khalifa</span>
                                </div>
                                <span className="text-xs text-gray-500">246 Properties</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-sm font-medium text-gray-800">Dubai Mall</span>
                                </div>
                                <span className="text-xs text-gray-500">153 Properties</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span className="text-sm font-medium text-gray-800">Dubai Marina</span>
                                </div>
                                <span className="text-xs text-gray-500">78 Properties</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    <span className="text-sm font-medium text-gray-800">Jabel Ali</span>
                                </div>
                                <span className="text-xs text-gray-500">34 Properties</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
};
