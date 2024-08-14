"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";

interface Coordinates {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  accuracy: number;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
}

interface Position {
  timestamp: number;
  coords: Coordinates;
}
interface GeolocationPositionErrorTypes {
  code: number;
  message: string;
}

const Map = ({ mapMarkerData }) => {
  console.log(mapMarkerData, "md");
  const mapRef = useRef<HTMLDivElement>(null);
  const [locationDetails, setLocationDetails] = useState<Coordinates | null>(
    null
  );

  useEffect(() => {
    const onSuccess = (position: Position) => {
      const { latitude, longitude } = position.coords;
      setLocationDetails({
        latitude,
        longitude,
        accuracy: position.coords.accuracy,
      });
    };

    const onError = (error: GeolocationPositionErrorTypes) => {
      console.log("Geolocation error:", error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      console.log("Browser doesn't support Geolocation");
    }
  }, []);

  useEffect(() => {
    if (!locationDetails) return;

    const initializationMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API as string,
        version: "weekly",
      });
      const { Map, InfoWindow } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      const mapOptions: google.maps.MapOptions = {
        center: {
          lat: parseFloat(mapMarkerData[0].latitude),
          lng: parseFloat(mapMarkerData[0].longitude),
        },
        zoom: 11,
        mapId: "MAPID", // replace with your map ID if needed
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const infoWindow = new InfoWindow();

      for (const markerData of mapMarkerData) {
        const markerContent = document.createElement("div");
        markerContent.innerHTML = `
          <div style="background-color: white; padding: 10px; border-radius: 5px; text-align: center; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
            <h3 style="margin: 0; color: #333;">${markerData.name}</h3>
            <p style="margin: 5px 0 0; color: #555;">${markerData.address}</p>
          </div>
        `;
        console.log(markerData, "markerdata");
        const marker = new AdvancedMarkerElement({
          map,
          position: {
            lat: parseFloat(markerData.latitude),
            lng: parseFloat(markerData.longitude),
          },
          title: `
             <h3 style="margin: 0; color: #333;">${markerData.name}</h3>
            <p style="margin: 5px 0 0; color: #555;">${markerData.address}</p>
            <p style="margin: 5px 0 0; color: #555;">${markerData.phoneNumber}</p>
         `,
          gmpClickable: true,
        });
        marker.addListener("click", ({ domEvent, latLng }) => {
          const { target } = domEvent;

          infoWindow.close();
          infoWindow.setContent(marker.title);
          infoWindow.open(marker.map, marker);
          // Handle click event based on marker data
          console.log(`Marker clicked: ${marker.title}`);
        });
      }
    };

    initializationMap();
  }, [mapMarkerData]);

  return <div className="map" ref={mapRef}></div>;
};

export default Map;
