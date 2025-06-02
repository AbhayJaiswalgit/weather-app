import EachDayForecast from "./EachDayForecast";

const WeeklyForecast = ({ weekdata }) => {
  return (
    <div className="weekly-forecast-container">
      <center>
        <h3>WEEKLY FORECAST</h3>
      </center>
      <EachDayForecast
        date={weekdata.forecast.forecastday[0].date}
        min_temp={weekdata.forecast.forecastday[0].day.mintemp_c}
        max_temp={weekdata.forecast.forecastday[0].day.maxtemp_c}
        description={weekdata.forecast.forecastday[0].day.condition.text}
        icon={weekdata.forecast.forecastday[0].day.condition.icon}
      ></EachDayForecast>
      <EachDayForecast
        date={weekdata.forecast.forecastday[1].date}
        min_temp={weekdata.forecast.forecastday[1].day.mintemp_c}
        max_temp={weekdata.forecast.forecastday[1].day.maxtemp_c}
        description={weekdata.forecast.forecastday[1].day.condition.text}
        icon={weekdata.forecast.forecastday[1].day.condition.icon}
      ></EachDayForecast>
      <EachDayForecast
        date={weekdata.forecast.forecastday[2].date}
        min_temp={weekdata.forecast.forecastday[2].day.mintemp_c}
        max_temp={weekdata.forecast.forecastday[2].day.maxtemp_c}
        description={weekdata.forecast.forecastday[2].day.condition.text}
        icon={weekdata.forecast.forecastday[2].day.condition.icon}
      ></EachDayForecast>
    </div>
  );
};

export default WeeklyForecast;
