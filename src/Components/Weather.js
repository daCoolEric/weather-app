import React, { useState } from "react";
import "./Styles/Weather.scss";

const Weather = ({ visible, currentData, unit }) => {
  let [quotesVisible, setQuotesVisible] = useState(false);

  // quotesVisible = true after 0.5s when visible == true
  if (visible) {
    setTimeout(() => {
      setQuotesVisible(true);
    }, 500);
  }

  return (
    <div className={`weather ${visible ? "appear" : ""}`}>
      <div className={`weather--digit ${visible ? "appear" : ""}`}>
        {unit === "metric" ? currentData.temp_c : currentData.temp_f}{" "}
        <sup>°</sup>
      </div>

      <div className="weather--quotes">
        <p className={quotesVisible ? "appear" : ""}>
          {currentData.condition.text}
        </p>
        <p className={quotesVisible ? "appear" : ""}>
          Feels like:{" "}
          {unit === "metric"
            ? currentData.feelslike_c
            : currentData.feelslike_f}
        </p>
      </div>
    </div>
  );
};

export default Weather;
