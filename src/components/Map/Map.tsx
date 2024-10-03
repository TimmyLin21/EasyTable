import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

interface MapProps {
  containerClass?: string;
  location: [number, number];
}

export const Map = ({ containerClass, location }: MapProps) => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token =
      "pk.eyJ1IjoidGltbXlsaW4iLCJhIjoiY20xcnBrcWR4MGRrMjJtcHpzM254OXVvbyJ9.8w1fGABq-M3ZaQnrKCSJxA";
    if (token) {
      mapboxgl.accessToken = token;
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current!,
        center: location,
        zoom: 15,
      });

      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: location,
            },
          },
        ],
      };

      for (const feature of geojson.features) {
        new mapboxgl.Marker({ color: "red" })
          .setLngLat(feature.geometry.coordinates)
          .addTo(mapRef.current!);
      }
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [location]);

  return (
    <div className={`w-full h-[300px] ${containerClass}`}>
      <div className="h-full w-full" ref={mapContainerRef}></div>
    </div>
  );
};
