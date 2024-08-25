import Searchbox from "./Searchbox";
import Infobox from "./Infobox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherinfo, setWeatherinfo] = useState({
    city: "delhi",
    feelslIke: 24,
    temp: 25,
    tempmin: 25.04,
    tempmax: 25.06,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeatherinfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2> Weather App</h2>
      <Searchbox updateInfo={updateInfo} />
      <Infobox info={weatherinfo} />
    </div>
  );
}
