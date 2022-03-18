import "./Styles/OtherDetailsMenu.scss";

import CloseIcon from "../assets/Images/icon-cross.svg";

import Detail from "./Detail";
import OtherLocations from "./OtherLocations";
import ForecastCard from "./ForecastCard";
import Attribution from "./Attribution";

const OtherDetailsMenu = ({
  currentData,
  forecastData,
  otherDetailsMenu,
  setOtherDetailsMenu,
  unit,
  setUnit,
  addNewLocation,
  otherLocations,
}) => {
  let weatherDetails = [
    {
      id: 1,
      name: "Cloud Cover",
      value: `${currentData.current.cloud}%`,
    },
    {
      id: 2,
      name: "Precipitation",
      value: `${currentData.current.precip_in} in`,
    },
    {
      id: 3,
      name: "Humidity",
      value: `${currentData.current.humidity}%`,
    },
    {
      id: 4,
      name: "Wind",
      value: `${currentData.current.wind_kph} kph`,
    },
    {
      id: 5,
      name: "Gust",
      value: `${currentData.current.gust_kph} kph`,
    },
    {
      id: 6,
      name: "Pressure",
      value: `${currentData.current.pressure_in} in`,
    },
    {
      id: 7,
      name: "Visibility",
      value: `${currentData.current.vis_km} km`,
    },
    {
      id: 8,
      name: "UV Index",
      value: `${currentData.current.uv}`,
    },
  ];

  let closeOtherDetailsMenu = () => {
    setOtherDetailsMenu(false);
  };

  let changeUnitToImperial = () => {
    setUnit("imperial");
  };

  let changeUnitToMetric = () => {
    setUnit("metric");
  };

  return (
    <div className={`other-details-menu ${otherDetailsMenu ? "active" : ""}`}>
      <div className="other-details-menu--close">
        <span>Close</span>
        <button className="close-btn" onClick={closeOtherDetailsMenu}>
          <img src={CloseIcon} alt="close-icon" />
        </button>
      </div>
      <div className="other-details-menu--header">
        <div className="other-details-menu--header--city-name">
          <span>Location</span> <span>{currentData.location.name}</span>
        </div>
        <div className="other-details-menu--header--unit-change">
          <button
            className={`celsius-btn ${unit === "imperial" ? "unselected" : ""}`}
            onClick={changeUnitToMetric}
          >
            C <sup>°</sup>
          </button>
          <button
            className={`fahrenheit-btn ${
              unit === "metric" ? "unselected" : ""
            }`}
            onClick={changeUnitToImperial}
          >
            F <sup>°</sup>
          </button>
        </div>
      </div>

      <div className="other-details-menu--weather-details">
        <Detail title={"Weather Details"} data={weatherDetails} />
      </div>

      <div className="other-details-menu--forecast">
        <h4>Weather Forecast</h4>
        <div className="forecast-cards-container">
          {forecastData.map((data) => (
            <ForecastCard key={data.dt} data={data} />
          ))}
        </div>
      </div>

      <OtherLocations
        addNewLocation={addNewLocation}
        otherLocations={otherLocations}
        unit={unit}
      />

      <Attribution />
    </div>
  );
};

export default OtherDetailsMenu;
