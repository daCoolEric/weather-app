import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const OtherLocations = ({ addNewLocation, otherLocations, unit }) => {
  const [newLocation, setNewLocation] = useState("");
  const [adding, setAdding] = useState(false);

  const showInput = () => {
    adding ? setAdding(false) : setAdding(true);
  };

  const addLocation = () => {
    if (newLocation === "" || newLocation === " ") return;
    addNewLocation(newLocation);
    setNewLocation("");
    setAdding(false);
  };

  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      addLocation();
    }
  };

  return (
    <div className="other-locations">
      <h4>Other Locations</h4>
      <div className="other-locations--add-new-location">
        {adding ? (
          <div className="add-location-input">
            <input
              type="text"
              placeholder="Enter location"
              value={newLocation}
              onChange={(e) => {
                setNewLocation(e.target.value);
              }}
              onKeyDown={keyDownHandler}
            />
            <button className="add-new-location-btn" onClick={addLocation}>
              Add
            </button>
          </div>
        ) : (
          <div className="information">
            <div>
              <p>Add a location</p>
              <p>
                Other locations to track weather of your favorite places in the
                world.
              </p>
            </div>
          </div>
        )}
        <div className="add-illustration" onClick={showInput}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>

      <div className="other-locations--locations">
        {otherLocations.length !== 0
          ? otherLocations.map((data) => (
              <div
                className="other-locations--locations-card"
                key={data.location.name}
              >
                <div className="other-locations--locations-card--header">
                  <div className="day-condition">
                    <p>{data.location.name}</p>
                    <span>{data.current.condition.text}</span>
                  </div>
                  <div className="icon">
                    <img
                      src={`https:${data.current.condition.icon}`}
                      alt={data.current.condition.text}
                    />
                  </div>
                </div>
                <div className="other-locations--locations-card--body">
                  <div className="weather-details">
                    <div>
                      <img
                        src="https://img.icons8.com/metro/26/000000/clouds.png"
                        alt="clouds-icon-by-icons8"
                      />{" "}
                      <span>{data.current.cloud}%</span>
                      <p className="tooltip">Clouds %</p>
                    </div>
                    <div>
                      <img
                        src="https://img.icons8.com/windows/32/000000/humidity.png"
                        alt="humidity-icon-by-icons8"
                      />{" "}
                      <span>{data.current.humidity}%</span>
                      <p className="tooltip">Humidity %</p>
                    </div>
                  </div>
                  <div className="temp">
                    {unit === "metric"
                      ? data.current.temp_c
                      : data.current.temp_f}
                    <sup>°</sup>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default OtherLocations;
