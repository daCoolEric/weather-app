// fetch current weather data for the given location
export const getCurrentData = async (
  position,
  location,
  setCurrentData,
  setLoading,
  setError,
  setErrorStatement
) => {
  const response = await fetch(
    location === undefined
      ? `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`
      : `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`
  );
  const data = await response.json();

  data.error !== undefined ? setError(true) : setCurrentData(data);
  data.error !== undefined && setErrorStatement(data.error.message);
  setLoading(false);
};

// get forecast data for the given lat lon
export const getForecastData = async (lat, lon, unit, setForecastData) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=${unit}&APPID=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  setForecastData(data.daily.slice(1, 8));
};

// fetch data for other locations
export const getOtherLocationData = async (
  location,
  otherLocations,
  setOtherLocations,
  setError,
  setErrorStatement
) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`
  );
  const data = await response.json();
  data.error !== undefined
    ? setError(true)
    : setOtherLocations([...otherLocations, data]);
  data.error !== undefined && setErrorStatement(data.error.message);
};

// converts a condition to a human readable string
export const getCondition = (condition) => {
  if (condition.includes("Sunny")) {
    return "sunny";
  }
  if (condition.includes("Clear")) {
    return "clear";
  }
  if (condition.includes("cloudy") || condition.includes("Cloudy")) {
    return "cloudy";
  }
  if (condition.includes("Overcast")) {
    return "overcast";
  }
  if (condition.includes("Mist")) {
    return "mist";
  }
  if (condition.includes("fog") || condition.includes("Fog")) {
    return "fog";
  }
  if (condition.includes("rain")) {
    return "rain";
  }
  if (condition.includes("drizzle")) {
    return "drizzle";
  }
  if (
    condition.includes("snow") ||
    condition.includes("Ice") ||
    condition.includes("ice")
  ) {
    return "snow";
  }
  if (condition.includes("thunder") || condition.includes("Thundery")) {
    return "thunder";
  }
  if (condition.includes("sleet")) {
    return "sleet";
  }
  if (condition.includes("Blizzard")) {
    return "blizzard";
  }
};
