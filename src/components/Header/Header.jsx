import * as React from "react";
import "./header.css";
import cloud from "../../assets/weather-cloud.svg";
import { Switch } from "@mui/material";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li id="logo">
              <a href="#">
                <img src={cloud} alt="" className="cloud" />
                WeatherMe
                <span id="time">21:00 pm</span>
              </a>
            </li>
            <li>
              <a href="#" className="active">
                Today
              </a>
            </li>
            <li>
              <a href="#">Tommorow</a>
            </li>
            <li>
              <a href="#">Monthly Forecast</a>
            </li>
          </ul>
        </nav>
        <div className="change-over">
          <span className="centigrade">
            <sup>°</sup>C
          </span>
          <div className="switch-container">
            <div className="switch"></div>
          </div>
          <span className="fahrenheit">
            <sup>°</sup>F
          </span>
        </div>
        <form action="" className="form">
        <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.242 34.755L36.8145 28.395C35.6805 27.27 34.167 26.64 32.5335 26.64C32.0025 26.64 31.473 26.715 30.9735 26.85L28.8885 24.78C30.7035 22.23 31.761 19.11 31.761 15.75C31.761 7.05 24.651 0 15.8805 0C7.11 0 0 7.05 0 15.75C0 24.45 7.11 31.5 15.8805 31.5C19.0725 31.5 22.0515 30.555 24.5325 28.935L26.7105 31.095C26.5605 31.59 26.5005 32.115 26.5005 32.64C26.5005 34.245 27.1185 35.76 28.2705 36.885L34.6815 43.245C35.817 44.37 37.3455 45 38.964 45C40.584 45 42.0945 44.37 43.245 43.245C45.585 40.905 45.585 37.095 43.242 34.755ZM3.027 15.75C3.027 8.715 8.787 3 15.882 3C22.977 3 28.737 8.715 28.737 15.75C28.737 22.785 22.974 28.5 15.882 28.5C8.79 28.5 3.027 22.785 3.027 15.75ZM41.094 41.13C39.915 42.3 37.9935 42.3 36.8145 41.13L30.402 34.755C29.8275 34.2 29.5245 33.45 29.5245 32.64C29.5245 31.83 29.8425 31.08 30.402 30.525C30.9765 29.955 31.7325 29.64 32.535 29.64C33.351 29.64 34.11 29.955 34.683 30.525L41.0955 36.885C42.2745 38.055 42.2745 39.96 41.0955 41.13H41.094Z"
              fill="#4E5254"
            />
            <path
              d="M16.5 24.75C16.5 25.17 16.17 25.5 15.75 25.5H15.735C10.35 25.485 6 21.135 6 15.75C6 10.365 10.35 6.015 15.735 6H15.75C16.17 6 16.5 6.33 16.5 6.75C16.5 7.17 16.17 7.5 15.75 7.5H15.735C11.19 7.515 7.5 11.205 7.5 15.75C7.5 20.295 11.19 23.985 15.735 24H15.75C16.17 24 16.5 24.33 16.5 24.75Z"
              fill="#4E5254"
            />
          </svg>
          <input
            type="search"
            className="search"
            placeholder="Search location..."
          />
        </form>
      </header>
    </>
  );
};

export default Header;
