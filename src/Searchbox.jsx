import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css";
import { useState } from "react";

export default function Searchbox({ updateInfo }) {
  let [error, setError] = useState(false);
  let [city, setCity] = useState("");

  const API = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ee713966707f6a671ffffb87cdca4031";

  let getWeatherinfo = async () => {
    try {
      let response = await fetch(
        `${API}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonresponse = await response.json();
      console.log(jsonresponse);

      let result = {
        city: city,
        temp: jsonresponse.main.temp,
        tempmin: jsonresponse.main.temp_min,
        tempmax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslIke: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch(err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWeatherinfo();
      updateInfo(info);
    } catch(err) {
      setError("true");
    }
  };
  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!!</p>}
      </form>
    </div>
  );
}
