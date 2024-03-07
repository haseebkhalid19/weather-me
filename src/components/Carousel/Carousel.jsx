import "./carousel.css";
import cloud from "../../assets/cloud.svg";
import rain from "../../assets/rain.svg";
import cloudy from "../../assets/cloudy.svg";
import thunder from "../../assets/thunder.svg";
import rainAndThunder from "../../assets/thunder-&-rain.svg";
import partialyCloudy from "../../assets/partialy-cloudy.svg";
import lightRain from "../../assets/light-rain.svg";

const Carousel = () => {
  return (
    <>
      <div className="slider-container">
        <div className="slide">
          <div className="location">
            Burdwan
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5417 11.625C24.5417 6.63142 20.4936 2.58334 15.5 2.58334C10.5064 2.58334 6.45834 6.63142 6.45834 11.625C6.45834 13.4165 6.98793 15.0828 7.88564 16.4881H7.8753C10.9236 21.2608 15.5 28.4167 15.5 28.4167L23.1247 16.4881H23.1157C24.0121 15.0828 24.5417 13.4165 24.5417 11.625ZM15.5 15.5C13.3597 15.5 11.625 13.7653 11.625 11.625C11.625 9.48471 13.3597 7.75 15.5 7.75C17.6403 7.75 19.375 9.48471 19.375 11.625C19.375 13.7653 17.6403 15.5 15.5 15.5Z"
                fill="#E4D9D9"
              />
            </svg>
          </div>

          <div className="temperature">
            <svg
              width="19"
              height="63"
              viewBox="0 0 19 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4885 6.24423C12.4885 4.51993 11.0906 3.12211 9.36634 3.12211C7.64205 3.12211 6.24423 4.51993 6.24423 6.24423V44.2426C7.22076 43.8974 8.27162 43.7096 9.36634 43.7096C10.4611 43.7096 11.5119 43.8974 12.4885 44.2426V40.5875H10.9274C10.0653 40.5875 9.36634 39.8886 9.36634 39.0264C9.36634 38.1643 10.0653 37.4654 10.9274 37.4654H12.4885V34.3433H10.9274C10.0653 34.3433 9.36634 33.6444 9.36634 32.7822C9.36634 31.9201 10.0653 31.2211 10.9274 31.2211H12.4885V28.099H10.9274C10.0653 28.099 9.36634 27.4001 9.36634 26.538C9.36634 25.6758 10.0653 24.9769 10.9274 24.9769H12.4885V21.8548H10.9274C10.0653 21.8548 9.36634 21.1559 9.36634 20.2937C9.36634 19.4316 10.0653 18.7327 10.9274 18.7327H12.4885V15.6106H10.9274C10.0653 15.6106 9.36634 14.9117 9.36634 14.0495C9.36634 13.1874 10.0653 12.4885 10.9274 12.4885H12.4885V9.36634H10.9274C10.0653 9.36634 9.36634 8.66743 9.36634 7.80529C9.36634 6.94314 10.0653 6.24423 10.9274 6.24423H12.4885ZM3.12211 46.0946V6.24423C3.12211 2.79564 5.91775 0 9.36634 0C12.8149 0 15.6106 2.79564 15.6106 6.24423V46.0946C17.5268 47.8096 18.7327 50.302 18.7327 53.076C18.7327 58.2488 14.5392 62.4423 9.36634 62.4423C4.19346 62.4423 0 58.2488 0 53.076C0 50.302 1.20592 47.8096 3.12211 46.0946ZM5.59258 48.1007C4.09142 49.2411 3.12211 51.0453 3.12211 53.076C3.12211 56.5245 5.91775 59.3202 9.36634 59.3202C12.8149 59.3202 15.6106 56.5245 15.6106 53.076C15.6106 51.0453 14.6413 49.2411 13.1401 48.1007C13.1218 48.0875 13.1037 48.0739 13.086 48.06C12.047 47.2883 10.76 46.8317 9.36634 46.8317C7.97269 46.8317 6.68567 47.2883 5.64671 48.06C5.62897 48.0739 5.61092 48.0875 5.59258 48.1007ZM9.36634 56.1981C7.64205 56.1981 6.24423 54.8002 6.24423 53.076C6.24423 51.3517 7.64205 49.9538 9.36634 49.9538C11.0906 49.9538 12.4885 51.3517 12.4885 53.076C12.4885 54.8002 11.0906 56.1981 9.36634 56.1981Z"
                fill="#EFE1E1"
              />
            </svg>
            27°C
            <img src={cloud} alt="svg" />
          </div>

          <div className="date">Aug 23, Tue</div>

          <div className="others">
            <div className="humidity">
              HUMIDITY <br />
              99%
            </div>

            <div className="visiblity">
              VISIBLITY <br />
              8km
            </div>

            <div className="air-pressure">
              AIR PRESSURE <br />
              1005hpa
            </div>

            <div className="wind">
              WIND <br />
              2mph
            </div>
          </div>
        </div>
      </div>

      <div className="next">
        <div className="report one">
          <div style={{ paddingTop: 10 }}>19:00 pm</div>
          <div>
            <img src={rain} alt="rain" />
          </div>
          <div className="temp">29°</div>
          <div className="next-inner"></div>
        </div>

        <div className="report two">
          <div style={{ paddingTop: 10 }}>19:00 pm</div>
          <div>
            <img src={cloudy} alt="rain" />
          </div>
          <div className="temp">29°</div>
          <div className="next-inner"></div>
        </div>

        <div className="report three">
          <div style={{ paddingTop: 10 }}>19:00 pm</div>
          <div>
            <img src={thunder} alt="rain" />
          </div>
          <div className="temp">29°</div>
          <div className="next-inner"></div>
        </div>

        <div className="report four">
          <div style={{ paddingTop: 10 }}>19:00 pm</div>
          <div>
            <img src={rainAndThunder} alt="rain" />
          </div>
          <div className="temp">29°</div>
          <div className="next-inner"></div>
        </div>

        <div className="report five">
          <div style={{ paddingTop: 10 }}>19:00 pm</div>
          <div>
            <img src={rainAndThunder} alt="rain" />
          </div>
          <div className="temp">29°</div>
          <div className="next-inner"></div>
        </div>

        <div className="report six">
          <div style={{ paddingTop: 10 }}>19:00 pm</div>
          <div>
            <img src={partialyCloudy} alt="rain" />
          </div>
          <div className="temp">29°</div>
          <div className="next-inner"></div>
        </div>

        <div className="report seven">
          <div style={{ paddingTop: 10 }}>19:00 pm</div>
          <div>
            <img src={lightRain} alt="rain" />
          </div>
          <div className="temp">29°</div>
          <div className="next-inner"></div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
