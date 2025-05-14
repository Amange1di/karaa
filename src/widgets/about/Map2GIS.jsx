import { useEffect, useRef, useState } from 'react';

export const Map2GIS = ({ mapLink, zoom = 16 }) => {
    const mapRef = useRef(null);
    const [isScriptLoaded, setScriptLoaded] = useState(false);

    const extractCoords = (link) => {
        const regex = /(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)/;
        const match = link?.match(regex);
        return match ? { lat: parseFloat(match[1]), lon: parseFloat(match[2]) } : null;
    };

    const coords = extractCoords(mapLink);

    useEffect(() => {
        if (window.DG) {
            setScriptLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
        script.async = true;
        script.onload = () => {
            window.DG.then(() => setScriptLoaded(true));
        };
        script.onerror = () => {
            console.error('2GIS script failed to load.');
        };

        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        if (!isScriptLoaded || !coords || !mapRef.current) return;

        window.DG.then(() => {
            const map = window.DG.map(mapRef.current, {
                center: [coords.lat, coords.lon],
                zoom: zoom,
            });

            window.DG.marker([coords.lat, coords.lon])
                .addTo(map)
                .bindPopup("Мы здесь!");

            return () => map.remove();
        });
    }, [isScriptLoaded, coords, zoom]);

    return <div ref={mapRef} style={{ width: '100%', height: '100%', borderRadius: '0' }} />;
};

export default Map2GIS;
