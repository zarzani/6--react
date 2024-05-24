import { StrictMode } from "react";
import axios, { isCancel, AxiosError } from "axios";
import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";
import { createRoot } from "react-dom/client";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Zahra Arzani</h1>

      <h3>weather App</h3>
      <WeatherSearch />

      <h3>updated weather for three city as fallow:</h3>

      <Weather city="London" />
      <Weather city="Berlin" />
      <Weather city="Tehran" />

      <h3>my Town</h3>

      <Weather city="Yazd" />
      Sorry for delay, I tried really hard to make these homework finalized. I had lots issues. 
      <br/>

      <a href="https://github.com/zarzani/6--react">my GitHub Link target=”_blank” attribute </a>
    </div>
  </StrictMode>
);
