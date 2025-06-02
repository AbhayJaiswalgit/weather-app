const CurrentWeather = ({ data }) => {
  return (
    <div className="curr-weather-container">
      <center>
        <h3>CURRENT WEATHER</h3>
      </center>
      <div className="curr-weather">
        <p>
          {data.location.name} , {data.location.region}
        </p>
        <p>
          {data.current.temp_c}
          <sup>o</sup>C
        </p>
        <img src={`${data.current.condition.icon}`} height={100} width={100} />
      </div>
    </div>
  );
};

export default CurrentWeather;
