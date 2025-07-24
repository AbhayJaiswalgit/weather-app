import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";
import Home from "./components/Home";
import CurrentWeather from "./components/CurrentWeather";
import AirConditions from "./components/AirConditions";
import WeeklyForecast from "./components/WeeklyForecast";
import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(true);

  const handleSearchButton = (inputLocation) => {
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=633182c2ffb34faa9ec135330250106&q=${inputLocation}&days=3`;
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API response not OK");
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          alert(`Error: ${data.error.message}`);
        } else {
          setWeatherData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        alert("Failed to fetch weather data.");
      });
  };

  return (
    <>
      <div className="container">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Header></Header>
        <LocationInput handleSearchButton={handleSearchButton}></LocationInput>
        {loading && <Home></Home>}
        {!loading && <CurrentWeather data={weatherData}></CurrentWeather>}
        {!loading && <AirConditions data={weatherData}></AirConditions>}
        {!loading && <WeeklyForecast weekdata={weatherData}></WeeklyForecast>}
      </div>
    </>
  );
}

export default App;
