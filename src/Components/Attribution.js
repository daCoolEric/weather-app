const Attribution = () => {
  return (
    <div className="attribution">
      <h4>Attribution</h4>
      <div className="attribution--links">
        <div className="attribution--links--link">
          <p>Icons from Icons8</p>
          <div>
            <a href="https://icons8.com/icon/uEV36IijHymM/weather">Favicon</a>
            <a href="https://icons8.com/icon/18481/humidity">Humidity icon</a>
            <a href="https://icons8.com/icon/649/clouds">Clouds icon</a>
          </div>
        </div>

        <div className="attribution--links--link">
          <p>Forecast</p>
          <a href="https://openweathermap.org">OpenWeatherMap</a>
        </div>

        <div className="attribution--links--link">
          <p>Realtime Weather</p>
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI
          </a>
        </div>
      </div>

      <div className="attribution--made-by">
        Made with ❤️ by <a href="https://github.com/arshWebDev">Arsh</a>
      </div>
    </div>
  );
};

export default Attribution;
