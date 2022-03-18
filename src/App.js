import React, { useState, useEffect } from "react";
import "./Components/Styles/App.scss";

import {
  getCurrentData,
  getForecastData,
  getCondition,
  getOtherLocationData,
} from "./utils";

import NavBar from "./Components/NavBar";
import DetailsBar from "./Components/DetailsBar";
import Progress from "./Components/Progress";
import Weather from "./Components/Weather";
import OtherDetailsMenu from "./Components/OtherDetailsMenu";
import Error from "./Components/Error";

const App = () => {
  const [currentData, setCurrentData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(false);
  const [condition, setCondition] = useState("");
  const [unit, setUnit] = useState("metric");
  const [otherDetailsMenu, setOtherDetailsMenu] = useState(false);
  const [otherLocations, setOtherLocations] = useState([]);
  const [error, setError] = useState(false);
  const [errorStatement, setErrorStatement] = useState("");

  if (currentData.location !== undefined) {
    setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        setVisible(true);
      }, 1000);
    }, 1000);
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchCurrentData);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  let fetchCurrentData = (position, location) => {
    getCurrentData(position, location, setCurrentData, setLoading, setError, setErrorStatement);
  };

  useEffect(() => {
    if (currentData.location !== undefined) {
      getForecastData(
        currentData.location.lat,
        currentData.location.lon,
        unit,
        setForecastData
      );

      setCondition(getCondition(currentData.current.condition.text));
    }
  }, [currentData, unit]);

  const addNewLocation = (location) => {
    getOtherLocationData(location, otherLocations, setOtherLocations, setError, setErrorStatement);
  };

  return (
    <main className="App">
      <div className={`background-wrapper ${visible ? condition : ""}`}></div>
      <section className={`main ${hide ? "active" : ""}`}>
        <NavBar
          hide={hide}
          otherDetailsMenu={otherDetailsMenu}
          setOtherDetailsMenu={setOtherDetailsMenu}
        />
        {hide ? (
          <Weather
            visible={visible}
            currentData={currentData.current}
            unit={unit}
          />
        ) : (
          <Progress currentData={currentData} hide={hide} />
        )}
        <DetailsBar
          getLocation={getLocation}
          fetchCurrentData={fetchCurrentData}
          currentData={currentData}
          loading={loading}
          setLoading={setLoading}
          hide={hide}
          visible={visible}
        />
      </section>
      {hide ? (
        <OtherDetailsMenu
          currentData={currentData}
          forecastData={forecastData}
          otherDetailsMenu={otherDetailsMenu}
          setOtherDetailsMenu={setOtherDetailsMenu}
          unit={unit}
          setUnit={setUnit}
          addNewLocation={addNewLocation}
          otherLocations={otherLocations}
        />
      ) : (
        ""
      )}

      <Error error={error} setError={setError} errorStatement={errorStatement} />
    </main>
  );
};

export default App;
