"use client";
import React, { useEffect, useState } from "react";
import { stateAndCities } from "../Data/stateAndCities";
import Store from "./Store";
import Map from "./Map";

const StoreLocator = () => {
  const [selectedState, setSelectedState] = useState({
    defaultState: "Delhi",
    defaultCity: "New Delhi",
    fetchedDealerData: [],
    loading: false,
  });
  useEffect(() => {
    const fetcher = async () => {
      try {
        setSelectedState((prevState) => ({
          ...prevState,
          loading: true,
        }));
        const response = await fetch(
          `/api/getShowrooms?state=${selectedState.defaultState}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const dealersData = await response.json();
        setSelectedState((prevState) => ({
          ...prevState,
          loading: false,
          fetchedDealerData: dealersData.data.cities,
        }));
      } catch (error) {
        setSelectedState((prevState) => ({
          ...prevState,
          loading: false,
        }));
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
                setSelectedState({
                  ...selectedState,
                  defaultCity: "",
                  defaultState: e.target.value,
                })
              }
            >
              {stateAndCities.map((data) => (
                <option value={data.state} key={data.state}>
                  {data.state}
                </option>
              ))}
            </select>
            <select
              name="cities"
              value={selectedState.defaultCity}
              onChange={(e) =>
                setSelectedState({
                  ...selectedState,
                  defaultCity: e.target.value,
                })
              }
            >
              {!selectedState.loading && (
                <>
                  <option>Select City</option>
                  {stateAndCities
                    .find((data) => data.state === selectedState.defaultState)
                    .cities.map((data) => (
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
            selectedState?.fetchedDealerData[selectedState.defaultCity]
          ) &&
            selectedState?.fetchedDealerData[selectedState.defaultCity]?.map(
              (data, i) => <Store details={data} key={i} />
            )}
        </div>
      </div>
      <div className="map-container">
        <Map
          mapMarkerData={
            selectedState.fetchedDealerData[selectedState.defaultCity]
          }
        />
      </div>
    </div>
  );
};

export default StoreLocator;
