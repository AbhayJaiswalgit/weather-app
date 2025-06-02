import { FaThermometerHalf } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";
import { WiHumidity } from "react-icons/wi";
import { MdCompress } from "react-icons/md";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";

const AirConditions = ({ data }) => {
  return (
    <div className="air-conditions-container">
      <center>
        <h3>WEATHER CONDITIONS</h3>
      </center>
      <div className="air-conditions-text">
        <p>
          <FaThermometerHalf /> Real Feel
        </p>
        <p>
          <FaWind /> Wind
        </p>
        <p>
          <IoMdCloudOutline /> Cloud
        </p>
        <p>
          <MdCompress /> Pressure
        </p>
      </div>

      <div className="air-conditions-value">
        <p>
          {data.current.feelslike_c}
          <sup>o</sup>C
        </p>
        <p>{data.current.wind_kph}km/h</p>
        <p>{data.current.cloud}%</p>
        <p>{data.current.pressure_mb}mb</p>
      </div>

      <div className="gap-condition">
        <div className="air-conditions-text">
          <p>
            <GiSunrise /> Sunrise
          </p>
          <p>
            <GiSunset /> Sunset
          </p>
          <p>
            <WiHumidity /> Humidity
          </p>
        </div>

        <div className="air-conditions-value">
          <p>{data.forecast.forecastday[0].astro.sunrise}</p>
          <p>{data.forecast.forecastday[0].astro.sunset}</p>
          <p>{data.current.humidity}%</p>
        </div>
      </div>

      <div className="air-conditions-value">
        <p>
          <img
            src={`${data.current.condition.icon}`}
            height={100}
            width={100}
          />
          {data.current.condition.text}
        </p>
      </div>
    </div>
  );
};

export default AirConditions;
