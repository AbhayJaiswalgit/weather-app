import { IoMdCloudOutline } from "react-icons/io";
import { WiHumidity } from "react-icons/wi";
import { MdDateRange } from "react-icons/md";
import { FaThermometerEmpty } from "react-icons/fa";
import { FaThermometerFull } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const EachDayForecast = ({ date, min_temp, max_temp, description, icon }) => {
  return (
    <div className="each-day-forecast-container">
      <div className="each-day-forecast-container-1">
        <p>
          <MdDateRange />
          {date}
        </p>
        <p>
          <FaThermometerEmpty />
          Min Temp
        </p>
        <p>
          <FaThermometerFull />
          Max Temp
        </p>
      </div>

      <div className="each-day-forecast-container-2">
        <p>
          <img src={`${icon}`} width={40} height={40} />
          {description}
        </p>
        <p>
          {min_temp}
          <sup>o</sup> C
        </p>
        <p>
          {max_temp}
          <sup>o</sup> C
        </p>
      </div>
    </div>
  );
};

export default EachDayForecast;
