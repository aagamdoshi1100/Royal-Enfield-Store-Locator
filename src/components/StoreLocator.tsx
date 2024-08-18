"use client";
import React, { useEffect, useState } from "react";
import { delhiCoordinates, stateAndCities } from "@/Data/stateAndCities";
import Store from "./Store";
import Map from "./Map";
import { GeolocationPositionErrorTypes, Position } from "@/types/map";
import Loader from "./Loader";

interface StateInterface {
  defaultState: string;
  defaultCity: string;
  accuracy?: number;
  latitude?: number;
  longitude?: number;
  fetchedDealerData: {
    [key: string]: any[];
  };
  loading: boolean;
  isUserGeolocationApproved: boolean;
}

const StoreLocator = () => {
  const [selectedState, setSelectedState] = useState<StateInterface>({
    defaultState: "",
    defaultCity: "",
    fetchedDealerData: {},
    loading: false,
    isUserGeolocationApproved: false,
  });

  const handleStateUpdates = (newStateProps: any) => {
    setSelectedState((prevState) => ({
      ...prevState,
      ...newStateProps,
    }));
  };

  useEffect(() => {
    handleStateUpdates({
      loading: true,
    });
    const onSuccess = async (position: Position) => {
      const { latitude, longitude, accuracy } = position.coords;
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_MAPS_API}`
        );
        const responseData = await res.json();
        const addressComponents = responseData.results[0].address_components;
        const state = addressComponents.find((component: any) =>
          component.types.includes("administrative_area_level_1")
        ).long_name;

        const city = addressComponents.find((component: any) =>
          component.types.includes("administrative_area_level_3")
        ).long_name;

        handleStateUpdates({
          defaultState: state,
          defaultCity: city,
          accuracy,
          latitude,
          longitude,
          isUserGeolocationApproved: true,
        });
      } catch (error) {
        console.error(error);
      }
    };

    const onError = (error: GeolocationPositionErrorTypes) => {
      console.error("Geolocation error:", error);
      handleStateUpdates({
        defaultState: "Delhi",
        defaultCity: "New Delhi",
        accuracy: 16.736,
        latitude: 19.1933182,
        longitude: 73.0914053,
        isUserGeolocationApproved: false,
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      handleStateUpdates({
        ...delhiCoordinates,
        loading: false,
      });
      console.error("Browser doesn't support Geolocation");
    }
  }, []);

  useEffect(() => {
    if (!selectedState.defaultState) {
      return;
    }
    const fetcher = async () => {
      try {
        const response = await fetch(
          `/api/getShowrooms?state=${selectedState.defaultState}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const dealersData = await response.json();
        handleStateUpdates({
          loading: false,
          fetchedDealerData: dealersData.data.cities,
        });
      } catch (error) {
        handleStateUpdates({
          loading: false,
        });
        console.error("Error fetching data:", error);
      }
    };
    fetcher();
  }, [selectedState.defaultState]);

  return (
    <div className="locator-main-component">
      <div className="store-locator-form">
        <form className="store-locator-form-elements">
          <h4 className="store-locator-heading">Store Locator</h4>
          <p className="store-locator-subheading">
            Search for Royal Enfield Store
          </p>
          <div className="state-city-select-input">
            <select
              name="state"
              value={selectedState.defaultState}
              onChange={(e) =>
                handleStateUpdates({
                  defaultCity: "",
                  defaultState: e.target.value,
                })
              }
            >
              {stateAndCities.map((data, i) => (
                <option value={data.state} key={data.state}>
                  {data.state}
                </option>
              ))}
            </select>
            <select
              name="cities"
              value={selectedState.defaultCity}
              onChange={(e) =>
                handleStateUpdates({
                  defaultCity: e.target.value,
                })
              }
            >
              {selectedState.loading ? (
                <option>Select City</option>
              ) : (
                <>
                  <option>Select City</option>
                  {stateAndCities &&
                    stateAndCities
                      .find((data) => data.state === selectedState.defaultState)
                      ?.cities.map((data) => (
                        <option value={data} key={data}>
                          {data}
                        </option>
                      ))}
                </>
              )}
            </select>
          </div>
        </form>
        <div className="stores">
          {Array.isArray(
            selectedState?.fetchedDealerData?.[
              selectedState?.defaultCity as string
            ]
          ) &&
            selectedState?.fetchedDealerData?.[
              selectedState?.defaultCity as string
            ]?.map((data, i) => <Store details={data} key={i} />)}
        </div>
      </div>
      <div className="map-container">
        <Map
          mapMarkerData={
            selectedState.fetchedDealerData[selectedState?.defaultCity]
          }
        />
      </div>
      {selectedState.loading && <Loader />}
    </div>
  );
};

export default StoreLocator;
