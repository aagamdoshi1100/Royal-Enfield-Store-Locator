"use client";
import { delhiCoordinates } from "@/Data/stateAndCities";
import {
  Coordinates,
  GeolocationPositionErrorTypes,
  MapProps,
  Position,
} from "@/types/map";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";

const Map: React.FC<MapProps> = ({ mapMarkerData }) => {
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
      setLocationDetails(delhiCoordinates);
      console.log("Geolocation error:", error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      setLocationDetails(delhiCoordinates);
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
        mapId: "MAPID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const infoWindow = new InfoWindow();

      for (const markerData of mapMarkerData) {
        if (markerData.latitude && markerData.longitude) {
          const markerContent = document.createElement("div");
          markerContent.innerHTML = `
          <div style="background-color: white; padding: 10px; border-radius: 5px; text-align: center; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
            <h3 style="margin: 0; color: #333;">${markerData.name}</h3>
            <p style="margin: 5px 0 0; color: #555;">${markerData.address}</p>
          </div>
        `;
          const marker = new AdvancedMarkerElement({
            map,
            position: {
              lat: parseFloat(markerData.latitude),
              lng: parseFloat(markerData.longitude),
            },
            title: "",
            gmpClickable: true,
          });
          marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(`
            <h3 style="margin: 0; color: #333;">${markerData.name}</h3>
           <p style="margin: 5px 0 0; color: #555;">${markerData.address}</p>
           <p style="margin: 5px 0 0; color: #555;">${markerData.phoneNumber}</p>
        `);
            infoWindow.open(marker.map, marker);
          });
        }
      }
    };

    initializationMap();
  }, [mapMarkerData, locationDetails]);

  return <div className="map" ref={mapRef}></div>;
};

export default Map;
