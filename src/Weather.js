import react, { useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=eae061c95483dd066657bfc7525418ed&units=metric`;
  axios.get(url).then(showTemperature);

  if (temperature) {
    return (
      <h3>
        The temperature in {props.city} is {Math.round(temperature)}°C
      </h3>
    );
  } else {
    return (
      <h3>
        render(
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        ) the temperature could not be retrieved.
      </h3>
    );
  }
}
