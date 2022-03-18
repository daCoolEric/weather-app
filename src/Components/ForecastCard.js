const ForecastCard = ({ data }) => {
  let dayName = new Date(data.sunrise * 1000).toLocaleString("en-us", {
    weekday: "long",
  });

  return (
    <div className="forecast-card">
      <div className="forecast-card--header">
        <div className="day-condition">
          <p>{dayName}</p>
          <span>{data.weather[0].main}</span>
        </div>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].main}
          />
        </div>
      </div>
      <div className="forecast-card--body">
        <div className="forecast-details">
          <div>
            <img
              src="https://img.icons8.com/metro/26/000000/clouds.png"
              alt="clouds-icon-by-icons8"
            />{" "}
            <span>{data.clouds}%</span>
            <p className="tooltip">Clouds %</p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/windows/32/000000/humidity.png"
              alt="humidity-icon-by-icons8"
            />{" "}
            <span>{data.humidity}%</span>
            <p className="tooltip">Humidity %</p>
          </div>
        </div>
        <div className="forecast-temp">
          <span>
            {data.temp.min} <sup>°</sup>
          </span>{" "}
          <span>/</span>{" "}
          <span>
            {data.temp.max} <sup>°</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
