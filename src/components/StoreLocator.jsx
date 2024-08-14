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
  });
  console.log(selectedState);
  useEffect(() => {
    const fetcher = async () => {
      const dealers = await fetch(
        `/api/getShowrooms?state=${selectedState.defaultState}`
      );
      const dealersData = await dealers.json();
      console.log(dealersData.data.cities[selectedState.defaultCity], "res");
      setSelectedState({
        ...selectedState,
        fetchedDealerData: dealersData.data.cities,
      });
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
          <select name="Country">
            <option value="India">India</option>
          </select>
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
            <option>Select City</option>
            {stateAndCities
              .find((data) => data.state === selectedState.defaultState)
              .cities.map((data) => (
                <option value={data} key={data}>
                  {data}
                </option>
              ))}
            <option value="Chandigarh">Chandigarh</option>
          </select>
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
